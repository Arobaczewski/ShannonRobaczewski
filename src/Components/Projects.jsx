import { ExternalLink, Github, Calendar, Award, Code, Users } from "lucide-react"

const Projects = () => {
    // Real case studies from the client's portfolio
    const projects = [
        {
            id: 1,
            title: "Angularis Publishing - Jera",
            subtitle: "Multi-Channel Strategy",
            caseStudyUrl: "/Angularis_Publishing_Jera_Study.png", // Replace with actual URL
            type: "Magazine Launch",
            description: "Led comprehensive digital marketing campaign for Jera lifestyle magazine launch, combining Facebook and Instagram presence building, targeted messaging for Jiu-Jitsu community, and strategic content creation featuring interviews with well-known instructors.",
            impact: "Built brand awareness • Drove initial subscriptions",
            techStack: ["Facebook", "Instagram", "Content Marketing", "Community Targeting"],
            features: [
                "Ground-up digital presence",
                "Tailored messaging for niche audience",
                "Targeted ads to Jiu-Jitsu practitioners",
                "Authentic community language"
            ],
            metrics: {
                strategy: "From Zero to Launch",
                targeting: "Hyper-Niche",
                content: "Visual Storytelling",
                result: "Brand Awareness"
            },
            status: "Completed",
            category: "launch",
            videoUrl: '/Angularis_Publishing_Jera.mp4',
            placeholder: '/Angularis.png'
        },
        {
            id: 2,
            title: "Hallcyon House Publishing",
            subtitle: "Children's Book Launch",
            caseStudyUrl: "/Hallcyon_House_Study.png", // Replace with actual URL
            type: "Direct-to-Consumer",
            description: "Developed storytelling-focused campaign for 'The Lion Who Found His Mane' children's book launch. Leveraged emotional connection with parents through authentic author stories and engaging visuals to drive 1,000 direct sales.",
            impact: "1,000 copies sold • Strong emotional connection",
            techStack: ["Facebook", "Instagram", "Storytelling", "Visual Marketing"],
            features: [
                "Story-first creative approach",
                "Targeted outreach to parents",
                "Behind-the-scenes content",
                "Engaging visual storytelling"
            ],
            metrics: {
                sales: "1,000 copies",
                approach: "Emotional Hook",
                connection: "Author Story",
                focus: "Platform Efficiency"
            },
            status: "Completed",
            category: "launch",
            videoUrl: '/Hallcyon_House_Publishing.mp4',
            placeholder: '/Hallcyon_House.png'
        },
        {
            id: 3,
            title: "Katlyn Slocum Designs",
            subtitle: "Website Template Sales",
            caseStudyUrl: "/Katlyn_Slocum_Designs_Study.png", // Replace with actual URL
            type: "Template Marketing",
            description: "Created targeted Facebook and Instagram ad campaigns for pre-built website templates designed for construction companies. Focused on speed and ease of use while addressing landing page optimization challenges.",
            impact: "Increased template sales • Improved conversion rates",
            techStack: ["Facebook Ads", "Instagram", "Landing Page Optimization", "Video Marketing"],
            features: [
                "Targeted audience (construction business owners)",
                "Speed-focused messaging",
                "Landing page optimization",
                "Short-form video walkthroughs"
            ],
            metrics: {
                proposition: "Professional & Quick",
                optimization: "Friction Removal",
                targeting: "Niche-Specific",
                trust: "Process Visualization"
            },
            status: "Completed",
            category: "optimization",
            videoUrl: '/Katlyn_Slocum_Designs.mp4',
            placeholder: '/Katlyn_Slocum.png'
        },
        {
            id: 4,
            title: "Learning Environments",
            subtitle: "NeoLounge 2 Floor Forts",
            caseStudyUrl: "/Learning_Environments_Study.png", // Replace with actual URL
            type: "Educational Products",
            description: "Developed evergreen lead-generation campaign for versatile classroom tools that convert between functional floor pads and playful 'forts'. Targeted educators, parents, and school administrators across multiple platforms.",
            impact: "Consistent qualified leads • Cross-platform synergy",
            techStack: ["Facebook", "Instagram", "LinkedIn", "Landing Page Optimization"],
            features: [
                "Focus on 'fun yet functional'",
                "Platform-specific tactics",
                "Targeted school leaders via LinkedIn",
                "Optimized landing page alignment"
            ],
            metrics: {
                creative: "Engaging & Practical",
                experience: "Cohesive Journey",
                format: "Evergreen Performance",
                synergy: "Cross-Platform"
            },
            status: "Completed",
            category: "lead-gen",
            videoUrl: '/Classroom_Select.mp4',
            placeholder: '/Learning_Environments.png'
        },
        {
            id: 5,
            title: "Fundraiser - Ryan Bohr",
            subtitle: "Great Allegheny Passage Bike Ride",
            caseStudyUrl: "/Ryan_Bohr_Study.png", // Replace with actual URL
            type: "Fundraising Event",
            description: "Created authentic, real-time fundraising campaign for CEO Ryan Bohr's 7-day bike ride to raise $30,000 for three schools. Used daily story updates and behind-the-scenes content to build community engagement and donor excitement.",
            impact: "$40,000 raised • High community engagement",
            techStack: ["Facebook", "Instagram", "Real-time Content", "Story Marketing"],
            features: [
                "Daily milestone updates",
                "Behind-the-scenes storytelling",
                "Real-time donor engagement",
                "Strategic budget allocation"
            ],
            metrics: {
                authenticity: "Real People, Real Effort",
                pride: "Community Investment",
                rhythm: "Daily Content",
                boost: "Strategic Amplification"
            },
            status: "Completed",
            category: "social",
            videoUrl: '/Ryan_Bohr.mp4',
            placeholder: '/Ryan_Bohr.png'
        },
        {
            id: 6,
            title: "The Smart Squad",
            subtitle: "Brand Awareness Campaign",
            caseStudyUrl: "/Smart_Squad_Study.png", // Replace with actual URL
            type: "Educational Brand",
            description: "Relaunched School Smart brand awareness campaign achieving measurable 20% sales increase over six months. Deployed across social platforms, Facebook, Instagram, LinkedIn and YouTube with consistent branding and educational storytelling.",
            impact: "20% sales increase • Emmy nomination recognition",
            techStack: ["Facebook", "Instagram", "LinkedIn", "YouTube", "Cross-Platform"],
            features: [
                "Educational connection and clarity",
                "Consistent branding across platforms",
                "Targeted parents and educators",
                "In-stream ad retargeting"
            ],
            metrics: {
                synergy: "Cross-Platform",
                creative: "High-Quality Video",
                precision: "Targeted Messaging",
                diversification: "Strategic Platform Mix"
            },
            status: "Completed",
            category: "paid-ads",
            videoUrl: '/The_Smart_Squad.mp4',
            placeholder: '/Smart_Squad.png'
        }
    ];

    const getCategoryIcon = (category) => {
        switch(category) {
            case 'launch': return <Award className="w-5 h-5" />;
            case 'lead-gen': return <Users className="w-5 h-5" />;
            case 'social': return <Code className="w-5 h-5" />;
            case 'optimization': return <Award className="w-5 h-5" />;
            case 'paid-ads': return <Users className="w-5 h-5" />;
            default: return <Code className="w-5 h-5" />;
        }
    };

    const getCategoryColor = (category) => {
        switch(category) {
            case 'launch': return 'from-rose-300 to-rose-500';
            case 'lead-gen': return 'from-rose-300 to-rose-500';
            case 'social': return 'from-rose-300 to-rose-500';
            case 'optimization': return 'from-rose-300 to-rose-500';
            case 'paid-ads': return 'from-rose-300 to-rose-500';
            default: return 'from-gray-500 to-gray-600';
        }
    };

    const handleCaseStudyClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <section id="projects" className="py-16 lg:py-24 relative">
            {/* Beige theme overlay */}
            <div className="absolute inset-4 bg-gradient-to-br from-black/20 via-transparent to-black/15 rounded-3xl pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="relative group inline-block">
                        <div className="absolute -inset-1 bg-gradient-to-r from-rose-300/10 to-rose-400/10 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                        <div className="relative backdrop-blur-md bg-gradient-to-br from-black/20 via-transparent to-black/20 p-8 rounded-3xl border border-white/20 shadow-2xl">
                            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-rose-700/30 to-rose-900/30 hover:from-rose-600/30 hover:to-rose-400/20 bg-clip-text text-transparent drop-shadow-lg">
                                    Featured Campaigns
                                </span>
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-rose-500/20 to-rose-900/30 hover:from-rose-900/30 hover:to-rose-500/20 mx-auto mb-8"></div>
                            <p className="text-xl text-rose-100 max-w-3xl mx-auto leading-relaxed">
                                Real campaigns, real results - driving measurable growth through strategic digital marketing
                            </p>
                        </div>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="relative group">
                            <div className="absolute -inset-2 rounded-3x blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                            <div className="relative backdrop-blur-sm rounded-2xl border bg-gradient-to-r from-rose-400/20 to-rose-600/20 border-rose-600/30 hover:border-rose-400/30 hover:bg-gradient-to-r hover:from-rose-600/20 hover:via-transparent hover:to-rose-800/20 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 h-full flex flex-col">
                                
                                {/* Card Header */}
                                <div className="p-6 pb-4">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-2">
                                            <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(project.category)} shadow-lg`}>
                                                {getCategoryIcon(project.category)}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold bg-gradient-to-r from-rose-700/30 to-rose-900/30 hover:from-rose-600/30 hover:to-rose-400/20 bg-clip-text text-transparent drop-shadow-lg transition-colors duration-300">
                                                    {project.title}
                                                </h3>
                                                <p className="text-sm text-rose-100 font-medium">{project.subtitle}</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Case Study Button */}
                                    <div className="flex items-center gap-2 mb-4">
                                        <button
                                            onClick={() => handleCaseStudyClick(project.caseStudyUrl)}
                                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-500/20 to-rose-700/20 hover:from-rose-400/30 hover:to-rose-600/30 text-rose-100 rounded-lg border border-rose-400/30 hover:border-rose-300 transition-all duration-200 text-sm font-medium group"
                                        >
                                            View Case Study
                                            <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                                        </button>
                                    </div>
                                    
                                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-rose-400/20 to-rose-600/20 text-rose-100 border border-rose-200 mb-4">
                                        {project.status}
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="px-6 pb-6 flex-grow flex flex-col">
                                    {/* Video placeholder - will be replaced with actual video */}
                                    {project.videoUrl ? (
                                        <div className="mb-4 rounded-lg overflow-hidden">
                                            <video 
                                                className="w-full h-48 object-cover"
                                                controls
                                                poster={project.placeholder}
                                            >
                                                <source src={project.videoUrl} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                    ) : (
                                        <div className="mb-4 rounded-lg bg-gradient-to-br from-rose-100 to-amber-100 h-48 flex items-center justify-center border border-rose-200">
                                            <div className="text-center">
                                                <div className="w-12 h-12 bg-rose-300 rounded-full flex items-center justify-center mx-auto mb-2">
                                                    <span className="text-rose-700 text-xl">▶</span>
                                                </div>
                                                <p className="text-rose-600 text-sm font-medium">Video Coming Soon</p>
                                            </div>
                                        </div>
                                    )}

                                    <p className="text-rose-100 leading-relaxed mb-4 flex-grow">
                                        {project.description}
                                    </p>

                                    {/* Impact Highlight */}
                                    <div className="bg-gradient-to-r from-rose-400/20 to-rose-600/20 rounded-lg p-3 mb-4 border border-rose-200">
                                        <p className="bg-gradient-to-r from-rose-700/30 to-rose-900/30 hover:from-rose-600/30 hover:to-rose-400/20 bg-clip-text text-transparent drop-shadow-lg font-semibold text-sm">💡 Key Impact:</p>
                                        <p className="text-rose-100 font-medium">{project.impact}</p>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="mb-4">
                                        <p className="bg-gradient-to-r from-rose-700/30 to-rose-900/30 hover:from-rose-600/30 hover:to-rose-400/20 bg-clip-text text-transparent drop-shadow-lg text-sm font-medium mb-2">Tools & Platforms:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.map((tech, techIndex) => (
                                                <span key={techIndex} className="px-3 py-1 bg-gradient-to-r from-rose-400/20 to-rose-600/20 text-rose-100 rounded-full text-xs border border-rose-200 hover:border-rose-400 transition-all duration-200">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Key Features */}
                                    <div className="mb-6">
                                        <p className="bg-gradient-to-r from-rose-700/30 to-rose-900/30 hover:from-rose-600/30 hover:to-rose-400/20 bg-clip-text text-transparent drop-shadow-lg text-sm font-medium mb-2">Key Features:</p>
                                        <div className="grid grid-cols-1 gap-1">
                                            {project.features.map((feature, featureIndex) => (
                                                <div key={featureIndex} className="flex items-center gap-2 text-sm text-rose-100">
                                                    <div className="w-1.5 h-1.5 bg-rose-400 rounded-full"></div>
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Metrics */}
                                    <div className="grid grid-cols-2 gap-2 text-center mt-auto">
                                        {Object.entries(project.metrics).map(([key, value], index) => (
                                            <div key={index} className={`p-2 rounded-lg bg-gradient-to-r from-rose-400/20 to-rose-600/20 border ${index % 2 === 0 ? 'bg-gradient-to-r from-black/20 via-transparent to-black/10 border-rose-200' : 'bg-gradient-to-br from-rose-400 via-transparent to-rose-500 border-rose-100'}`}>
                                                <div className={`text-lg font-bold ${index % 2 === 0 ? 'bg-gradient-to-r from-rose-700/30 to-rose-900/30 hover:from-rose-600/30 hover:to-rose-400/20 bg-clip-text text-transparent drop-shadow-lg' : 'bg-gradient-to-r from-rose-700/30 to-rose-900/30 hover:from-rose-600/30 hover:to-rose-400/20 bg-clip-text text-transparent drop-shadow-lg'}`}>{value}</div>
                                                <div className={`text-xs ${index % 2 === 0 ? 'text-rose-100' : 'text-rose-100'} capitalize`}>{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <div className="relative group">
                        <div className="absolute -inset-1 from-rose-700/30 to-rose-900/30 rounded-2xl blur-lg opacity-75"></div>
                        <div className="relative backdrop-blur-sm bg-gradient-to-br from-black/20 via-transparent to-black/20 px-6 py-3 rounded-2xl border border-rose-200/30 shadow-lg">
                            <div className="inline-flex items-center gap-3">
                                <div className="w-3 h-3 bg-rose-400 rounded-full animate-pulse"></div>
                                <span className="bg-gradient-to-r from-rose-700/30 to-rose-900/30 hover:from-rose-600/30 hover:to-rose-400/20 bg-clip-text text-transparent drop-shadow-lg font-medium">Ready to discuss your next campaign?</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects