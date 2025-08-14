import React, { useState } from "react"
import { Mail, MapPin, Linkedin, Send, User, MessageSquare } from "lucide-react"

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [validationErrors, setValidationErrors] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    // EmailJS configuration - using environment variables correctly
    const EMAILJS_CONFIG = {
        serviceId: import.meta.env.VITE_SERVICE_ID,
        clientTemplateId: import.meta.env.VITE_NOTIFY_TEMPLATE_ID,
        userTemplateId: import.meta.env.VITE_AUTOREPLY_TEMPLATE_ID,
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    };

    const validateField = (name, value) => {
        switch (name) {
            case 'name':
                if (!value.trim()) return 'Name is required';
                if (value.trim().length < 2) return 'Name must be at least 2 characters';
                return '';
            case 'email':
                if (!value.trim()) return 'Email is required';
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) return 'Please enter a valid email address';
                return '';
            case 'subject':
                if (!value.trim()) return 'Subject is required';
                if (value.trim().length < 3) return 'Subject must be at least 3 characters';
                return '';
            case 'message':
                if (!value.trim()) return 'Message is required';
                if (value.trim().length < 10) return 'Message must be at least 10 characters';
                return '';
            default:
                return '';
        }
    };

    const validateForm = () => {
        const errors = {};
        Object.keys(formData).forEach(field => {
            const error = validateField(field, formData[field]);
            if (error) errors[field] = error;
        });
        return errors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        if (validationErrors[name]) {
            setValidationErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
        
        if (error) {
            setError(false);
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        const fieldError = validateField(name, value);
        if (fieldError) {
            setValidationErrors(prev => ({
                ...prev,
                [name]: fieldError
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors);
            return;
        }

        setIsLoading(true);
        setError(false);
        setValidationErrors({});

        try {
            // Import EmailJS dynamically
            const emailjs = (await import('@emailjs/browser')).default;
            
            // Initialize EmailJS
            emailjs.init(EMAILJS_CONFIG.publicKey);

            // Prepare email parameters for client notification (to Shannon)
            const clientEmailParams = {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message,
                to_name: 'Shannon',
                to_email: 'Shannon.Robaczewski@gmail.com',
                reply_to: formData.email
            };

            // Prepare email parameters for user confirmation
            const userEmailParams = {
                to_name: formData.name,
                to_email: formData.email,
                from_name: 'Shannon Robaczewski',
                from_email: 'Shannon.Robaczewski@gmail.com',
                original_subject: formData.subject,
                original_message: formData.message
            };

            // Send both emails concurrently
            const [clientResult, userResult] = await Promise.all([
                emailjs.send(
                    EMAILJS_CONFIG.serviceId,
                    EMAILJS_CONFIG.clientTemplateId,
                    clientEmailParams
                ),
                emailjs.send(
                    EMAILJS_CONFIG.serviceId,
                    EMAILJS_CONFIG.userTemplateId,
                    userEmailParams
                )
            ]);

            console.log('Client notification sent:', clientResult);
            console.log('User confirmation sent:', userResult);
            
            setIsSubmitted(true);
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });

            setTimeout(() => {
                setIsSubmitted(false);
            }, 5000);

        } catch (error) {
            console.error('EmailJS Error:', error);
            console.error('Error details:', {
                serviceId: EMAILJS_CONFIG.serviceId,
                clientTemplateId: EMAILJS_CONFIG.clientTemplateId,
                userTemplateId: EMAILJS_CONFIG.userTemplateId,
                publicKey: EMAILJS_CONFIG.publicKey ? 'Set' : 'Missing'
            });
            setError(true);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="py-16 lg:py-24 relative">
            <div className="absolute inset-4 bg-gradient-to-br from-black/20 via-transparent to-black/15 rounded-3xl pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <div className="relative group inline-block">
                        <div className="absolute -inset-1 bg-gradient-to-r from-rose-300/10 to-rose-400/10 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                        <div className="relative backdrop-blur-md bg-gradient-to-br from-black/20 via-transparent to-black/20 p-8 rounded-3xl border border-white/20 shadow-2xl">
                            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-rose-700/30 to-rose-900/30 hover:from-rose-600/30 hover:to-rose-400/20 bg-clip-text text-transparent drop-shadow-lg">
                                    Let's Work Together
                                </span>
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-rose-500/20 to-rose-900/30 hover:from-rose-900/30 hover:to-rose-500/20 mx-auto mb-8"></div>
                            <p className="text-xl text-rose-100 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
                                Ready to bring your ideas to life? I'm always interested in discussing new opportunities and exciting projects.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-rose-300/10 to-rose-400/10 rounded-2xl blur-lg opacity-75"></div>
                            <div className="relative backdrop-blur-md bg-gradient-to-br from-black/20 via-transparent to-black/20 p-8 rounded-2xl border border-white/10 shadow-xl">
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-rose-700/30 to-rose-900/30 hover:from-rose-600/30 hover:to-rose-400/20 bg-clip-text text-transparent drop-shadow-lg mb-6">Get In Touch</h3>
                                <p className="text-rose-100 leading-relaxed mb-8 drop-shadow-md">
                                    Whether you're looking for a digital marketer to join your team, have a project in mind, 
                                    or just want to connect, I'd love to hear from you. Let's create something amazing together!
                                </p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            {/* Email Contact */}
                            <div className="relative group bg-gradient-to-r from-rose-300/10 to-rose-400/10">
                                <div className="absolute -inset-1 bg-gradient-to-r from-rose-400/20 via-rose-500/10 to-rose-600/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></div>
                                <div className="relative flex items-center gap-4 p-4 backdrop-blur-md bg-gradient-to-br from-black/20 via-transparent to-black/20 rounded-xl border border-white/10 hover:border-rose-400/50 transition-all duration-300 shadow-lg">
                                    <div className="w-12 h-12 bg-gradient-to-r from-rose-400/30 to-rose-600/30 hover:from-rose-600/30 hover:to-rose-400/20 hover:shadow-2xl hover:shadow-rose-400/40 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <Mail className="w-6 h-6 text-rose-100" />
                                    </div>
                                    <div>
                                        <p className="text-rose-400 text-sm font-medium">Email</p>
                                        <a href="mailto:Shannon.Robaczewski@gmail.com" className="text-rose-100 font-semibold hover:text-rose-300 transition-colors duration-200 drop-shadow-lg">
                                            Shannon.Robaczewski@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* LinkedIn Contact */}
                            <div className="relative group bg-gradient-to-r from-rose-300/10 to-rose-400/10">
                                <div className="absolute -inset-1 bg-gradient-to-r from-rose-400/20 via-rose-500/10 to-rose-600/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></div>
                                <div className="relative flex items-center gap-4 p-4 backdrop-blur-md bg-gradient-to-br from-black/20 via-transparent to-black/20 rounded-xl border border-white/10 hover:border-rose-400/50 transition-all duration-300 shadow-lg">
                                    <div className="w-12 h-12 bg-gradient-to-r from-rose-400/30 to-rose-600/30 hover:from-rose-600/30 hover:to-rose-400/20 hover:shadow-2xl hover:shadow-rose-400/40 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <Linkedin className="w-6 h-6 text-rose-100" />
                                    </div>
                                    <div>
                                        <p className="text-rose-400 text-sm font-medium">Linkedin</p>
                                        <a href="https://www.linkedin.com/in/shannon-robaczewski-53a78824/" target="_blank" rel="noopener noreferrer"  className="text-rose-100 font-semibold hover:text-rose-300 transition-colors duration-200 drop-shadow-lg">
                                            https://www.linkedin.com/in/shannon-robaczewski-53a78824/
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="relative group bg-gradient-to-r from-rose-300/10 to-rose-400/10">
                                <div className="absolute -inset-1 bg-gradient-to-r from-rose-400/20 via-rose-500/10 to-rose-600/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></div>
                                <div className="relative flex items-center gap-4 p-4 backdrop-blur-md bg-gradient-to-br from-black/20 via-transparent to-black/20 rounded-xl border border-white/10 hover:border-rose-400/50 transition-all duration-300 shadow-lg">
                                    <div className="w-12 h-12 bg-gradient-to-r from-rose-400/30 to-rose-600/30 hover:from-rose-600/30 hover:to-rose-400/20 hover:shadow-2xl hover:shadow-rose-400/40 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <MapPin className="w-6 h-6 text-rose-100" />
                                    </div>
                                    <div>
                                        <p className="text-rose-400 text-sm font-medium">Location</p>
                                        <p className="text-rose-100 font-semibold drop-shadow-lg">Homewood, IL</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute -inset-2 bg-gradient-to-r from-rose-400/20 via-rose-500/10 to-rose-600/20 rounded-3xl blur-xl opacity-75"></div>
                        <div className="relative backdrop-blur-md bg-gradient-to-br from-black/20 via-transparent to-black/20 rounded-2xl p-8 border border-white/20 shadow-2xl">
                            <h3 className="text-2xl font-bold text-rose-100 mb-6 drop-shadow-lg">Send Me a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-rose-100 mb-2 drop-shadow-md">
                                        Your Name
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <User className="h-5 w-5 text-rose-100" />
                                        </div>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            disabled={isLoading}
                                            className={`block w-full pl-10 pr-3 py-3 border rounded-lg backdrop-blur-md bg-black/25 text-rose-100 placeholder-rose-100 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg ${
                                                validationErrors.name 
                                                    ? 'border-red-400/50 focus:ring-red-400' 
                                                    : 'border-white/15 focus:ring-rose-400'
                                            }`}
                                            placeholder="Enter your full name"
                                        />
                                    </div>
                                    {validationErrors.name && (
                                        <p className="mt-1 text-sm text-red-400 drop-shadow-md">{validationErrors.name}</p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-rose-100 mb-2 drop-shadow-md">
                                        Your Email
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Mail className="h-5 w-5 text-rose-100" />
                                        </div>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            disabled={isLoading}
                                            className={`block w-full pl-10 pr-3 py-3 border rounded-lg backdrop-blur-md bg-black/25 text-rose-100 placeholder-rose-100 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg ${
                                                validationErrors.email 
                                                    ? 'border-red-400/50 focus:ring-red-400' 
                                                    : 'border-white/15 focus:ring-rose-400'
                                            }`}
                                            placeholder="Enter your email address"
                                        />
                                    </div>
                                    {validationErrors.email && (
                                        <p className="mt-1 text-sm text-red-400 drop-shadow-md">{validationErrors.email}</p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-rose-100 mb-2 drop-shadow-md">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        disabled={isLoading}
                                        className={`block w-full px-3 py-3 border rounded-lg backdrop-blur-md bg-black/25 text-rose-100 placeholder-rose-100 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg ${
                                            validationErrors.subject 
                                                ? 'border-red-400/50 focus:ring-red-400' 
                                                : 'border-white/15 focus:ring-rose-400'
                                        }`}
                                        placeholder="What's this about?"
                                    />
                                    {validationErrors.subject && (
                                        <p className="mt-1 text-sm text-red-400 drop-shadow-md">{validationErrors.subject}</p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-rose-100 mb-2 drop-shadow-md">
                                        Your Message
                                    </label>
                                    <div className="relative">
                                        <div className="absolute top-3 left-3 pointer-events-none">
                                            <MessageSquare className="h-5 w-5 text-rose-100" />
                                        </div>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={6}
                                            value={formData.message}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            disabled={isLoading}
                                            className={`block w-full pl-10 pr-3 py-3 border rounded-lg backdrop-blur-md bg-black/25 text-rose-100 placeholder-rose-100 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 resize-none disabled:opacity-50 disabled:cursor-not-allowed shadow-lg ${
                                                validationErrors.message 
                                                    ? 'border-red-400/50 focus:ring-red-400' 
                                                    : 'border-white/15 focus:ring-rose-400'
                                            }`}
                                            placeholder="Tell me about your project or just say hello..."
                                        ></textarea>
                                    </div>
                                    {validationErrors.message && (
                                        <p className="mt-1 text-sm text-red-400 drop-shadow-md">{validationErrors.message}</p>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-rose-400/30 to-rose-600/30 hover:from-rose-600/30 hover:to-rose-400/20 text-rose-100 font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-rose-400/40 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none shadow-lg"
                                >
                                    {isLoading ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                            <div className="mt-6 space-y-3">
                                {isSubmitted && (
                                    <div className="p-4 backdrop-blur-md bg-green-500/20 border border-green-400/30 rounded-lg animate-fade-in shadow-lg">
                                        <p className="text-green-200 text-sm font-medium drop-shadow-md">
                                            ✅ Message sent successfully! You'll receive a confirmation email shortly, and Shannon will get back to you within 24-48 hours.
                                        </p>
                                    </div>
                                )}

                                {error && (
                                    <div className="p-4 backdrop-blur-md bg-red-500/20 border border-red-400/30 rounded-lg animate-fade-in shadow-lg">
                                        <p className="text-red-200 text-sm font-medium drop-shadow-md">
                                            ❌ Something went wrong. Please try again or{' '}
                                            <a 
                                                href="mailto:Shannon.Robaczewski@gmail.com" 
                                                className="underline hover:text-red-100 transition-colors"
                                            >
                                                email Shannon directly
                                            </a>.
                                        </p>
                                    </div>
                                )}
                                {isLoading && (
                                    <div className="p-4 backdrop-blur-md bg-rose-500/20 border border-rose-400/30 rounded-lg animate-fade-in shadow-lg">
                                        <p className="text-rose-200 text-sm font-medium drop-shadow-md">
                                            📤 Sending your message and confirmation email...
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-16">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-rose-400/30 to-rose-600/30 rounded-3xl blur-xl opacity-75"></div>
                        <div className="relative bg-gradient-to-r from-rose-200/2 to-rose-400/30 rounded-2xl p-8 text-rose-100 shadow-2xl border border-white/20 backdrop-blur-sm">
                            <h4 className="text-2xl font-semibold text-rose-100 mb-4 drop-shadow-lg">
                                Ready to Start Something Great?
                            </h4>
                            <p className="text-rose-100 mb-6 max-w-2xl mx-auto drop-shadow-md">
                                I'm currently available for new opportunities and exciting projects. 
                                Let's discuss how we can work together to bring your vision to life.
                            </p>
                            <a 
                                href="mailto:Shannon.Robaczewski@gmail.com"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-400/30 to-rose-600/30 hover:from-rose-600/30 hover:to-rose-400/20 text-rose-100 font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-rose-400/40 shadow-lg"
                            >
                                <Mail className="w-5 h-5" />
                                Email Me Directly
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact