import { TrendingUp, Users, Target, Eye, Share2, Zap} from "lucide-react"

const About = () => {
    return (
        <section id="about" className="py-16 lg:py-24 relative">
            <div className="absolute inset-4 bg-gradient-to-br from-black/20 via-transparent to-black/15 rounded-3xl pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <div className="relative group inline-block">
                        <div className="absolute -inset-1 bg-gradient-to-r from-rose-300/10 to-rose-400/10 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                        <div className="relative backdrop-blur-md bg-gradient-to-br from-black/10 via-transparent to-black/20 p-8 rounded-3xl border border-white/20 shadow-2xl">
                            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-rose-700/30 to-rose-900/30 hover:from-rose-600/30 hover:to-rose-400/20 bg-clip-text text-transparent drop-shadow-lg">
                                    About Me
                                </span>
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-rose-500/20 to-rose-900/30 hover:from-rose-900/30 hover:to-rose-500/20 mx-auto mb-8"></div>
                            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
                                Transforming digital landscapes through strategic innovation and measurable results for over a decade.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                    <div className="space-y-8">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-rose-300/10 to-rose-400/10 rounded-2xl blur-lg opacity-75"></div>
                            <div className="relative backdrop-blur-md bg-gradient-to-br from-black/30 via-transparent to-black/20 p-8 rounded-2xl border border-white/10 shadow-xl">
                                <h3 className="text-2xl font-bold text-rose-100 mb-4 flex items-center drop-shadow-lg">
                                    <Target className="mr-3 text-rose-400 drop-shadow-lg" size={24} />
                                        My Journey
                                </h3>
                                <div className="space-y-4 text-rose-100 leading-relaxed">
                                    <p className="drop-shadow-md">
                                        I'm a data-driven marketing leader who doesn't just follow trends—I create them. 
                                        With 10+ years of experience spanning B2B and B2C markets, I've mastered the 
                                        art of turning complex multi-platform strategies into bottom-line growth. 
                                        From slashing cost-per-click rates by 89% (from $9 to $1) to scaling content 
                                        ecosystems that engage millions, I deliver results that 
                                        matter.    
                                    </p>
                                    <p className="drop-shadow-md">
                                        Currently leading social media and content strategy at School Specialty, 
                                        I've built my reputation on three core principles: strategic thinking that anticipates 
                                        market shifts, execution that exceeds expectations, and analytics that drive continuous 
                                        optimization. Whether I'm collaborating with executives, mentoring creative teams, 
                                        or architecting campaigns across 15+ client portfolios, I bring the same relentless focus on ROI 
                                        and brand growth.
                                    </p>
                                    <p className="font-semibold text-rose-500 drop-shadow-lg">
                                        Ready to leverage cutting-edge digital strategies to accelerate your brand's next chapter of growth.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <div className="space-y-8">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-rose-300/10 to-rose-400/10 rounded-2xl blur-lg opacity-75"></div>
                            <div className="relative backdrop-blur-md bg-gradient-to-br from-black/30 via-transparent to-black/20 p-8 rounded-2xl border border-white/10 shadow-xl">
                            <img src="/about.png" alt="girl walking dog" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative group mb-20">
                    <div className="absolute -inset-2 bg-gradient-to-r from-rose-300/10 to-rose-400/10 rounded-3xl blur-xl opacity-75"></div>
                    <div className="relative backdrop-blur-md bg-gradient-to-br from-black/20 via-transparent to-black/10 rounded-2xl p-8 lg:p-12 border border-white/20 shadow-2xl">
                        <div className="text-3xl font-bold text-center mb-12 drop-shadow-lg">
                            <h3 className="bg-gradient-to-r from-rose-700/30 to-rose-900/30 hover:from-rose-600/30 hover:to-rose-400/20 bg-clip-text text-transparent drop-shadow-lg">
                                Why Employers Choose Me
                            </h3>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="backdrop-blur-md bg-gradient-to-br from-rose-900/30 to-rose-800/20 p-6 rounded-xl border border-rose-500/30 hover:border-rose-400 hover:-translate-y-1 transition-all duration-300 group/card shadow-lg">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-rose-600 rounded-full flex items-center justify-center group-hover/card:scale-110 transition-transform duration-300 shadow-lg">
                                        <TrendingUp className="w-6 h-6 text-rose-100" />
                                    </div>
                                    <h4 className="text-xl font-semibold text-rose-100 ml-4 group-hover/card:text-rose-200 transition-colors duration-300 drop-shadow-lg">Strategic Leadership</h4>
                                </div>
                                <p className="text-gray-100 mb-4 leading-relaxed drop-shadow-md">
                                    Unlike typical social media managers, I operate at the executive 
                                    level—presenting to Directors and VPs, leading cross-functional 
                                    initiatives, and driving company-wide digital transformation. 
                                </p>
                                <div className="text-sm font-semibold text-rose-500">
                                    Business Impact • Real Solutions • Leadership
                                </div>
                            </div>
                            <div className="backdrop-blur-md bg-gradient-to-br from-rose-800/20 to-rose-200/20 p-6 rounded-xl border border-white/20 hover:border-rose-400 hover:-translate-y-1 transition-all duration-300 group/card shadow-lg">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-stone-300 to-stone-500 rounded-full flex items-center justify-center group-hover/card:scale-110 transition-transform duration-300 shadow-lg">
                                        <Target className="w-6 h-6 text-rose-100" />
                                    </div>
                                    <h4 className="text-xl font-semibold text-rose-100 ml-4 group-hover/card:text-rose-200 transition-colors duration-300 drop-shadow-lg">Performance Obsessed</h4>
                                </div>
                                <p className="text-gray-100 mb-4 leading-relaxed drop-shadow-md">
                                    <span className="text-rose-500 font-semibold">I don't just create content!</span> I engineer campaigns that deliver measurable business outcomes. My focus on cost optimization and ROI has saved companies thousands while increasing performance.
                                </p>
                                <div className="text-sm font-semibold text-rose-500">
                                    Self-Directed • Results-Oriented • Leadership
                                </div>
                            </div>
                            <div className="backdrop-blur-md bg-gradient-to-br from-rose-800/10 to-rose-900/30 p-6 rounded-xl border border-blue-500/30 hover:border-rose-400 hover:-translate-y-1 transition-all duration-300 group/card shadow-lg">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center group-hover/card:scale-110 transition-transform duration-300 shadow-lg">
                                        <Users className="w-6 h-6 text-rose-10" />
                                    </div>
                                    <h4 className="text-xl font-semibold text-rose-100 ml-4 group-hover/card:text-rose-200 transition-colors duration-300 drop-shadow-lg">Dual Market Mastery</h4>
                                </div>
                                <p className="text-gray-100 mb-4 leading-relaxed drop-shadow-md">
                                    Few professionals excel in both B2B and B2C environments. I seamlessly navigate enterprise decision-makers and consumer audiences, adapting strategies for maximum impact in each.
                                </p>
                                <div className="text-sm font-semibold text-rose-500">
                                    Business Driven • Communication • User-Focused
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 text-center">
                            <div className="backdrop-blur-md bg-gradient-to-r from-rose-900/30 to-rose-800/20 rounded-xl p-6 border border-rose-500/30 shadow-lg">
                                <p className="text-lg font-bold text-rose-200 mb-4 drop-shadow-lg">
                                    Ready to leverage cutting-edge digital strategies to accelerate your brand's next chapter of growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-rose-400/30 to-rose-600/30 rounded-3xl blur-xl opacity-75"></div>
                        <div className="relative bg-gradient-to-r from-rose-200/2 to-rose-400/30 rounded-2xl p-8 text-rose-100 shadow-2xl border border-white/20 backdrop-blur-sm">
                            <h4 className="text-2xl text-rose-100 font-semibold mb-4 drop-shadow-lg">Beyond the Metrics</h4>
                            <p className="text-rose-50 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
                                When I'm not optimizing campaigns or analyzing performance data, 
                                you'll find me staying active and recharging for the next challenge. I believe 
                                in maintaining balance and bringing fresh energy to everything I do.
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                <div className="flex flex-col items-center">
                                <div className="bg-gradient-to-r from-rose-400 to-rose-500 text-rose-100 w-10 h-10 rounded-full flex items-center justify-center mb-2">
                                    <Users className="w-5 h-5" />
                                </div>
                                <span className="text-xs text-rose-700">Fitness Enthusiast</span>
                                </div>
                                <div className="flex flex-col items-center">
                                <div className="bg-gradient-to-r from-amber-400 to-amber-500 text-rose-100 w-10 h-10 rounded-full flex items-center justify-center mb-2">
                                    <Share2 className="w-5 h-5" />
                                </div>
                                <span className="text-xs text-rose-700">Dog Walking Partner</span>
                                </div>
                                <div className="flex flex-col items-center">
                                <div className="bg-gradient-to-r from-blue-400 to-indigo-500 text-rose-100 w-10 h-10 rounded-full flex items-center justify-center mb-2">
                                    <Eye className="w-5 h-5" />
                                </div>
                                <span className="text-xs text-rose-700">Content Consumer</span>
                                </div>
                                <div className="flex flex-col items-center">
                                <div className="bg-gradient-to-r from-stone-300 to-stone-500 text-rose-100 w-10 h-10 rounded-full flex items-center justify-center mb-2">
                                    <Zap className="w-5 h-5" />
                                </div>
                                <span className="text-xs text-rose-700">Continuous Learner</span>
                                </div>
                            </div>
                            <p className="text-rose-700 text-xs mt-4 text-center italic">
                                "I find inspiration everywhere—from storytelling in entertainment to the dedication I see in sports. This diverse perspective helps me create authentic, engaging content that resonates with real people."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default About