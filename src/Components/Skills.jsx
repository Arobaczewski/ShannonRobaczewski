<<<<<<< HEAD
import Marquee from "react-fast-marquee"

const Skills = () => {
    const skills = [
        { name: "Meta Business Manager", icon: "📱" },
        { name: "Google Ads", icon: "🎯" },
        { name: "LinkedIn Advertising", icon: "💼" },
        { name: "TikTok Marketing", icon: "🎵" },
        { name: "Email Marketing", icon: "📧" },
        { name: "SEO/SEM", icon: "🔍" },
        { name: "Content Strategy", icon: "📝" },
        { name: "Analytics & Reporting", icon: "📊" },
        { name: "Social Media Strategy", icon: "📲" },
        { name: "PPC Management", icon: "💰" },
        { name: "Brand Development", icon: "✨" },
        { name: "Influencer Partnerships", icon: "🤝" },
        { name: "Video Content", icon: "🎬" },
        { name: "A/B Testing", icon: "🧪" },
        { name: "ROI Optimization", icon: "📈" },
        { name: "Cross-Platform Campaigns", icon: "🌐" }
    ];

    return (
        <section id="skills" className="py-16 lg:py-24 relative">
            <div className="absolute inset-4 bg-gradient-to-br from-black/20 via-transparent to-black/15 rounded-3xl pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <div className="relative group inline-block">
                        <div className="absolute -inset-1 bg-gradient-to-r from-rose-300/10 to-rose-400/10 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                        <div className="relative backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-3xl border border-white/20 shadow-2xl">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                                <span className="bg-gradient-to-r from-rose-700/30 to-rose-900/30 hover:from-rose-600/30 hover:to-rose-400/20 bg-clip-text text-transparent drop-shadow-lg">
                                    My Skills
                                </span>
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-rose-500/20 to-rose-900/30 hover:from-rose-900/30 hover:to-rose-500/20 mx-auto mb-8"></div>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-rose-400/20 to-rose-400/10 rounded-2xl pointer-events-none"></div>
                        <Marquee
                            gradient={false}           
                            speed={50}                 
                            pauseOnHover={true}        
                            className="py-8"           
                        >
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="relative group mx-6" 
                                >
                                    <div className="absolute -inset-1 bg-gradient-to-r from-rose-400/20 to-rose-600/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></div>
                                    <div className="relative backdrop-blur-md bg-gradient-to-r from-rose-400/30 to-rose-600/30 px-6 py-4 rounded-xl border border-white/20 hover:border-rose-400/50 hover:bg-white/15 hover:scale-110 hover:shadow-xl hover:shadow-rose-400/20 transition-all duration-300 cursor-pointer shadow-lg">
                                        <div className="flex items-center gap-3 whitespace-nowrap">
                                            <span className="text-2xl group-hover:scale-125 transition-transform duration-300 drop-shadow-lg">
                                                {skill.icon}
                                            </span>
                                            <span className="text-rose-100 font-semibold text-lg group-hover:text-rose-100 transition-colors duration-300 drop-shadow-md">
                                                {skill.name}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </div>
                <div className="relative overflow-hidden mt-8">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-rose-400/10 to-rose-400/20 rounded-2xl pointer-events-none"></div>
                        <Marquee
                            gradient={false}
                            speed={40}                 
                            direction="right"          
                            pauseOnHover={true}        
                            className="py-8"
                        >
                            {skills.slice().reverse().map((skill, index) => (
                                <div
                                    key={index}
                                    className="relative group mx-6"
                                >
                                    <div className="absolute -inset-1 bg-gradient-to-r from-rose-400/30 to-rose-600/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></div>
                                    <div className="relative backdrop-blur-md bg-gradient-to-r from-rose-400/30 to-rose-600/30 px-6 py-4 rounded-xl border border-white/20 hover:border-rose-400/50 hover:bg-white/15 hover:scale-110 hover:shadow-xl hover:shadow-rose-400/20 transition-all duration-300 cursor-pointer shadow-lg">
                                        <div className="flex items-center gap-3 whitespace-nowrap">
                                            <span className="text-2xl group-hover:scale-125 transition-transform duration-300 drop-shadow-lg">
                                                {skill.icon}
                                            </span>
                                            <span className="text-rose-100 font-semibold text-lg group-hover:text-rose-100 transition-colors duration-300 drop-shadow-md">
                                                {skill.name}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </div>
                <div className="text-center mt-12">
                    <div className="relative group inline-block">
                        <div className="absolute -inset-1 bg-gradient-to-r from-rose-400/20 to-rose-600/20 rounded-2xl blur-lg opacity-75"></div>
                        <div className="relative backdrop-blur-md bg-white/5 px-6 py-3 rounded-2xl border border-white/10 shadow-lg">
                            <p className="text-rose-100 font-medium drop-shadow-md">
                                ✨ Always learning, always growing
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
=======
import Marquee from "react-fast-marquee"

const Skills = () => {
    const skills = [
        { name: "Meta Business Manager", icon: "📱" },
        { name: "Google Ads", icon: "🎯" },
        { name: "LinkedIn Advertising", icon: "💼" },
        { name: "TikTok Marketing", icon: "🎵" },
        { name: "Email Marketing", icon: "📧" },
        { name: "SEO/SEM", icon: "🔍" },
        { name: "Content Strategy", icon: "📝" },
        { name: "Analytics & Reporting", icon: "📊" },
        { name: "Social Media Strategy", icon: "📲" },
        { name: "PPC Management", icon: "💰" },
        { name: "Brand Development", icon: "✨" },
        { name: "Influencer Partnerships", icon: "🤝" },
        { name: "Video Content", icon: "🎬" },
        { name: "A/B Testing", icon: "🧪" },
        { name: "ROI Optimization", icon: "📈" },
        { name: "Cross-Platform Campaigns", icon: "🌐" }
    ];

    return (
        <section id="skills" className="py-16 lg:py-24 relative">
            <div className="absolute inset-4 bg-gradient-to-br from-black/20 via-transparent to-black/15 rounded-3xl pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <div className="relative group inline-block">
                        <div className="absolute -inset-1 bg-gradient-to-r from-rose-300/10 to-rose-400/10 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                        <div className="relative backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-3xl border border-white/20 shadow-2xl">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                                <span className="bg-gradient-to-r from-rose-700/30 to-rose-900/30 hover:from-rose-600/30 hover:to-rose-400/20 bg-clip-text text-transparent drop-shadow-lg">
                                    My Skills
                                </span>
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-rose-500/20 to-rose-900/30 hover:from-rose-900/30 hover:to-rose-500/20 mx-auto mb-8"></div>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-rose-400/20 to-rose-400/10 rounded-2xl pointer-events-none"></div>
                        <Marquee
                            gradient={false}           
                            speed={50}                 
                            pauseOnHover={true}        
                            className="py-8"           
                        >
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="relative group mx-6" 
                                >
                                    <div className="absolute -inset-1 bg-gradient-to-r from-rose-400/20 to-rose-600/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></div>
                                    <div className="relative backdrop-blur-md bg-gradient-to-r from-rose-400/30 to-rose-600/30 px-6 py-4 rounded-xl border border-white/20 hover:border-rose-400/50 hover:bg-white/15 hover:scale-110 hover:shadow-xl hover:shadow-rose-400/20 transition-all duration-300 cursor-pointer shadow-lg">
                                        <div className="flex items-center gap-3 whitespace-nowrap">
                                            <span className="text-2xl group-hover:scale-125 transition-transform duration-300 drop-shadow-lg">
                                                {skill.icon}
                                            </span>
                                            <span className="text-rose-100 font-semibold text-lg group-hover:text-rose-100 transition-colors duration-300 drop-shadow-md">
                                                {skill.name}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </div>
                <div className="relative overflow-hidden mt-8">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-rose-400/10 to-rose-400/20 rounded-2xl pointer-events-none"></div>
                        <Marquee
                            gradient={false}
                            speed={40}                 
                            direction="right"          
                            pauseOnHover={true}        
                            className="py-8"
                        >
                            {skills.slice().reverse().map((skill, index) => (
                                <div
                                    key={index}
                                    className="relative group mx-6"
                                >
                                    <div className="absolute -inset-1 bg-gradient-to-r from-rose-400/30 to-rose-600/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></div>
                                    <div className="relative backdrop-blur-md bg-gradient-to-r from-rose-400/30 to-rose-600/30 px-6 py-4 rounded-xl border border-white/20 hover:border-rose-400/50 hover:bg-white/15 hover:scale-110 hover:shadow-xl hover:shadow-rose-400/20 transition-all duration-300 cursor-pointer shadow-lg">
                                        <div className="flex items-center gap-3 whitespace-nowrap">
                                            <span className="text-2xl group-hover:scale-125 transition-transform duration-300 drop-shadow-lg">
                                                {skill.icon}
                                            </span>
                                            <span className="text-rose-100 font-semibold text-lg group-hover:text-rose-100 transition-colors duration-300 drop-shadow-md">
                                                {skill.name}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </div>
                <div className="text-center mt-12">
                    <div className="relative group inline-block">
                        <div className="absolute -inset-1 bg-gradient-to-r from-rose-400/20 to-rose-600/20 rounded-2xl blur-lg opacity-75"></div>
                        <div className="relative backdrop-blur-md bg-white/5 px-6 py-3 rounded-2xl border border-white/10 shadow-lg">
                            <p className="text-rose-100 font-medium drop-shadow-md">
                                ✨ Always learning, always growing
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
>>>>>>> 3ef094d3fadf037962d83b3ec7476a61a1becb67
export default Skills