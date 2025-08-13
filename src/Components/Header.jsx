import { User, Brain, Laptop, Contact } from "lucide-react";

const Header = () => {
    return (
        <div className="w-full bg-transparent relative">
            <div className="absolute inset-2 bg-gradient-to-r from-black/20 via-transparent to-black/15 rounded-2xl pointer-events-none z-0"></div>
            <header className="flex justify-between items-center text-rose-400 py-5 mx-auto relative z-20">
                <div className="flex flex-shrink-0 items-center">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-rose-200/15 to-rose-300/15 rounded-2xl blur-md opacity-0 group-hover:opacity-75 transition duration-500 z-10"></div>
                        <div className="relative backdrop-blur-md ml-5 bg-gradient-to-r from-rose-300/10 to-rose-400/10 px-6 py-3 rounded-2xl border border-white/10 hover:border-rose-400/50 transition-all duration-300 shadow-lg z-20">
                            <div className="text-3xl md:text-4xl font-bold">
                                <span className="bg-gradient-to-r from-rose-700/30 to-rose-900/30 hover:from-rose-600/30 hover:to-rose-400/20 bg-clip-text text-transparent drop-shadow-lg">
                                    Shannon Robaczewski
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <nav className="hidden md:block">
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-rose-400/8 to-rose-500/8 rounded-2xl blur-md opacity-60 z-10"></div>
                        <div className="relative mr-5 backdrop-blur-md  bg-white/5 p-2 rounded-2xl border border-white/10 shadow-xl z-20">
                            <ul className="flex space-x-2 text-lg">
                                <li>
                                    <a className="flex items-center gap-2 px-4 py-2 transition-all duration-300 hover:bg-white/10 rounded-lg group/nav backdrop-blur-sm border border-transparent hover:border-white/20 hover:shadow-lg relative z-30" href="/#about">
                                        <User className="w-5 h-5 group-hover/nav:scale-110 transition-transform duration-200 drop-shadow-lg" />
                                        <span className="bg-gradient-to-r from-rose-700/30 to-rose-900/30 hover:from-rose-600/30 hover:to-rose-400/20 bg-clip-text text-transparent drop-shadow-lg font-medium">About</span>
                                    </a> 
                                </li>
                                <li>
                                    <a className="flex items-center gap-2 px-4 py-2 transition-all duration-300 hover:text-rose-600 hover:bg-white/10 rounded-lg group/nav backdrop-blur-sm border border-transparent hover:border-white/20 hover:shadow-lg relative z-30" href="/#skills">
                                        <Brain className="w-5 h-5 group-hover/nav:scale-110 transition-transform duration-200 drop-shadow-lg" />
                                        <span className="bg-gradient-to-r from-rose-700/30 to-rose-900/30 hover:from-rose-600/30 hover:to-rose-400/20 bg-clip-text text-transparent drop-shadow-lg font-medium">Skills</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="flex items-center gap-2 px-4 py-2 transition-all duration-300 hover:text-rose-600 hover:bg-white/10 rounded-lg group/nav backdrop-blur-sm border border-transparent hover:border-white/20 hover:shadow-lg relative z-30" href="/#projects">
                                        <Laptop className="w-5 h-5 group-hover/nav:scale-110 transition-transform duration-200 drop-shadow-lg" />
                                        <span className="bg-gradient-to-r from-rose-700/30 to-rose-900/30 hover:from-rose-600/30 hover:to-rose-400/20 bg-clip-text text-transparent drop-shadow-lg font-medium">Projects</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="flex items-center gap-2 px-4 py-2 transition-all duration-300 hover:text-rose-600 hover:bg-white/10 rounded-lg group/nav backdrop-blur-sm border border-transparent hover:border-white/20 hover:shadow-lg relative z-30" href="/#contact">
                                        <Contact className="w-5 h-5 group-hover/nav:scale-110 transition-transform duration-200 drop-shadow-lg" />
                                        <span className="bg-gradient-to-r from-rose-700/30 to-rose-900/30 hover:from-rose-600/30 hover:to-rose-400/20 bg-clip-text text-transparent drop-shadow-lg font-medium">Contact</span>
                                    </a>
                                </li> 
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;