import { Linkedin, Download, Contact } from "lucide-react"

const Hero = () => {
    return (
        <section className="relative py-8 lg:py-16">
            <div className="absolute inset-4 bg-gradient-to-br from-black/30 via-transparent to-black/20 rounded-3xl pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="order-2 lg:order-1 flex flex-col justify-center space-y-8">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-rose-300/10 to-rose-400/10 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-3xl border border-white/20 shadow-2xl hover:shadow-rose-400/20 hover:shadow-2xl transition-shadow duration-300">
                                <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-rose-100">
                                    <span className="text-rose-100 drop-shadow-lg">
                                        Hi there! I'm 
                                    </span>
                                    <span className="bg-gradient-to-r from-rose-700/30 to-rose-900/30 hover:from-rose-600/30 hover:to-rose-400/20 bg-clip-text text-transparent drop-shadow-lg"> Shannon Robaczewski,</span>
                                    <span className="inline-block animate-wave drop-shadow-lg">👋</span>
                                    <br />
                                    <span className="text-rose-100 drop-shadow-lg">
                                        and I'm a
                                    </span>
                                    <span className="bg-gradient-to-r from-rose-700/30 to-rose-900/30 hover:from-rose-600/30 hover:to-rose-400/20 bg-clip-text text-transparent drop-shadow-lg"> Social Media Manager</span>
                                    <span>,</span>
                                    <span className="bg-gradient-to-r from-rose-700/30 to-rose-900/30 hover:from-rose-600/30 hover:to-rose-400/20 bg-clip-text text-transparent drop-shadow-lg"> Digital Marketer </span>
                                    <span className="text-rose-100 drop-shadow-lg">
                                        and a
                                    </span>
                                    <span className="bg-gradient-to-r from-rose-700/30 to-rose-900/30 hover:from-rose-600/30 hover:to-rose-400/20 bg-clip-text text-transparent drop-shadow-lg"> Proven Leader</span>
                                    .
                                </h1>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <a 
                                href="/#contact" 
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-rose-400/30 to-rose-600/30 hover:from-rose-600/30 hover:to-rose-400/20 hover:shadow-2xl hover:shadow-rose-400/40 rounded-full text-rose-100 font-semibold uppercase tracking-wider text-sm gap-2 hover:gap-3 transition-all duration-300 group shadow-lg"
                            >
                                Contact Me
                                <Contact className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                            </a>
                            <a 
                                href="/Shannon_Robaczewski_Resume.pdf" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-rose-400/30 to-rose-600/30 hover:from-rose-600/30 hover:to-rose-400/20 hover:shadow-2xl hover:shadow-rose-400/40 rounded-full text-rose-100 font-semibold uppercase tracking-wider text-sm gap-2 hover:gap-3 transition-all duration-300 group shadow-lg"
                            >
                                Get Resume 
                                <Download className="w-4 h-4" />    
                            </a>
                                                        <a 
                                href="https://www.linkedin.com/in/shannon-robaczewski-53a78824/" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-rose-400/30 to-rose-600/30 hover:from-rose-600/30 hover:to-rose-400/20 hover:shadow-2xl hover:shadow-rose-400/40 rounded-full text-rose-100 font-semibold uppercase tracking-wider text-sm gap-2 hover:gap-3 transition-all duration-300 group shadow-lg"
                            >
                                Linkedin 
                                <Linkedin className="w-4 h-4" />    
                            </a>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-rose-300/10 to-rose-400/10 shadow-2xl max-w-md w-full hover:shadow-rose-400/20 hover:shadow-2xl transition-shadow duration-300">
                            <img 
                                src='/hero.png'
                                alt="Social Media" 
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero