import {
  ChevronDown,
  ChevronRight,
  CircleEllipsis,
  Eye,
  LineChart,
  MoreHorizontal,
  Search,
  Settings,
} from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-main-gradient">
      {/* Navigation */}
      <header className="border-b border-[#ffffff15] py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 rounded-lg bg-[#9c55ff] flex items-center justify-center shadow-[0_0_15px_rgba(156,85,255,0.5)]">
                <div className="w-5 h-5 rounded-full bg-white"></div>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="#" className="text-white/80 hover:text-white flex items-center gap-1 text-[15px]">
                Features <ChevronDown className="h-4 w-4" />
              </Link>
              <Link href="#" className="text-white/80 hover:text-white text-[15px]">
                Developers
              </Link>
              <Link href="#" className="text-white/80 hover:text-white flex items-center gap-1 text-[15px]">
                Company <ChevronDown className="h-4 w-4" />
              </Link>
              <Link href="#" className="text-white/80 hover:text-white text-[15px]">
                Blog
              </Link>
              <Link href="#" className="text-white/80 hover:text-white text-[15px]">
                Changelog
              </Link>
            </nav>
          </div>

          <Link
            href="#"
            className="bg-[#9c55ff] text-white px-5 py-2 rounded-lg hover:bg-[#a865ff] transition-colors text-[15px] font-medium font-title shadow-[0_0_15px_rgba(156,85,255,0.3)]"
          >
            Join waitlist
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
          <div className="bg-[#2a193c]/80 backdrop-blur-sm rounded-full px-4 py-1 flex items-center gap-2 mb-8 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
            <span className="bg-[#9c55ff] text-[10px] font-bold px-2 py-0.5 rounded-full">NEW</span>
            <span className="text-[#a865ff] text-sm">Latest integration just arrived</span>
          </div>

          <h1 className="text-5xl md:text-7xl mb-6 max-w-4xl font-title">
            <span className="gradient-text">
              Boost your
              <br />
              rankings with AI.
            </span>
          </h1>

          <p className="text-white/90 max-w-2xl mb-10 text-xl font-normal">
            Elevate your site's visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.
          </p>

          <Link
            href="#"
            className="bg-white text-[#2a193c] px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors font-title shadow-[0_4px_20px_rgba(255,255,255,0.3)]"
          >
            Start for free
          </Link>

          {/* Dashboard Preview */}
          <div className="mt-16 w-full max-w-5xl dashboard-container">
            <div className="bg-[#020103]/90 backdrop-blur-md rounded-lg border border-[#ffffff15] overflow-hidden">
              {/* Browser Controls */}
              <div className="flex items-center gap-1 p-2 border-b border-[#ffffff10] bg-[#0f0a16]">
                <div className="flex gap-1.5 pl-1">
                  <div className="browser-dot red"></div>
                  <div className="browser-dot yellow"></div>
                  <div className="browser-dot green"></div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="flex">
                {/* Sidebar */}
                <div className="w-64 border-r border-[#ffffff10] p-4 bg-[#1a0f26]/70 backdrop-blur-sm">
                  <div className="dashboard-card rounded-md p-3 flex items-center gap-2 mb-4">
                    <Eye className="w-4 h-4 text-white/70" />
                    <span className="text-white font-medium text-sm">Site Overview</span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2 p-2 text-white/70 hover:text-white">
                      <LineChart className="w-4 h-4" />
                      <span className="text-sm">Analytics</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 text-white/70 hover:text-white">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="opacity-70"
                      >
                        <path
                          d="M10 20L14 4M18 8L22 12L18 16M6 16L2 12L6 8"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-sm">Smart Keyword Generator</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 text-white/70 hover:text-white">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="opacity-70"
                      >
                        <path
                          d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-sm">Goals</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 text-white/70 hover:text-white">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="opacity-70"
                      >
                        <path
                          d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-sm">Content Evaluation</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 text-white/70 hover:text-white">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="opacity-70"
                      >
                        <path
                          d="M7 17L17 7M7 7H17V17"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-sm">Backlink Audit</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 text-white/70 hover:text-white">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="opacity-70"
                      >
                        <path
                          d="M15 7H3M15 12H3M9 17H3M21 17L17 13M17 13L13 17M17 13V7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-sm">Link Optimization Wizard</span>
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-4 bg-[#150a1f]/80 backdrop-blur-sm">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h2 className="text-white/80 text-sm font-title">Site Overview</h2>
                      <div className="flex items-center gap-1 text-white/60 text-xs">
                        <span>www.website.com</span>
                        <ChevronRight className="w-3 h-3" />
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Search"
                          className="bg-[#2a193c]/70 backdrop-blur-sm border border-[#ffffff20] rounded-md py-1.5 pl-8 pr-3 text-sm text-white/80 w-48"
                        />
                        <Search className="w-4 h-4 absolute left-2 top-1/2 transform -translate-y-1/2 text-white/60" />
                      </div>
                      <button className="bg-[#9c55ff] p-1.5 rounded-md shadow-[0_0_10px_rgba(156,85,255,0.3)]">
                        <Settings className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="dashboard-card rounded-md px-3 py-1.5 flex items-center gap-2 text-sm text-white/80">
                      <span>Jun 24</span>
                      <ChevronRight className="w-3 h-3" />
                      <span>Today</span>
                    </div>
                    <button className="p-1.5 rounded-md border border-[#ffffff20]">
                      <Settings className="w-4 h-4 text-white/60" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {/* Visibility Card */}
                    <div className="dashboard-card rounded-md p-4 relative">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-white/70 text-sm font-title">Visibility</h3>
                          <div className="flex items-end gap-2">
                            <span className="text-white text-3xl font-semibold font-title">10.15%</span>
                            <span className="text-[#4ade80] text-sm mb-1">+5.6%</span>
                          </div>
                        </div>
                        <button>
                          <CircleEllipsis className="w-4 h-4 text-white/60" />
                        </button>
                      </div>

                      <div className="h-32 mt-4 relative">
                        {/* Chart Visualization */}
                        <div className="absolute inset-0">
                          <svg width="100%" height="100%" viewBox="0 0 300 100" preserveAspectRatio="none">
                            <defs>
                              <linearGradient id="chart-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#9c55ff" stopOpacity="0.25" />
                                <stop offset="100%" stopColor="#9c55ff" stopOpacity="0" />
                              </linearGradient>
                            </defs>
                            <path
                              d="M0,80 C20,70 40,90 60,75 C80,60 100,80 120,70 C140,60 160,80 180,50 C200,20 220,40 240,30 C260,20 280,40 300,30"
                              className="chart-line"
                            />
                            <path
                              d="M0,80 C20,70 40,90 60,75 C80,60 100,80 120,70 C140,60 160,80 180,50 C200,20 220,40 240,30 C260,20 280,40 300,30 L300,100 L0,100 Z"
                              className="chart-area"
                            />
                          </svg>

                          {/* Data Point Tooltip */}
                          <div className="absolute top-1/4 right-1/4 -translate-y-full">
                            <div className="bg-[#4d3763] rounded-md p-2 text-xs text-white shadow-lg tooltip-arrow shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                              <div className="text-white/70">Jun 18</div>
                              <div className="flex items-center gap-2">
                                <span>Visibility</span>
                                <span className="font-semibold font-title">9.8%</span>
                              </div>
                            </div>
                            <div className="w-2 h-2 bg-[#9c55ff] rounded-full absolute -bottom-1 left-1/2 transform -translate-x-1/2 shadow-[0_0_5px_rgba(156,85,255,0.5)]"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Organic Keywords Card */}
                    <div className="dashboard-card rounded-md p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-white/70 text-sm font-title">Organic Keywords</h3>
                          <div className="flex items-end gap-2">
                            <span className="text-white text-3xl font-semibold font-title">35.6K</span>
                            <span className="text-[#f87171] text-sm mb-1">-2.5%</span>
                          </div>
                        </div>
                        <button>
                          <CircleEllipsis className="w-4 h-4 text-white/60" />
                        </button>
                      </div>

                      <div className="mt-4">
                        <h4 className="text-white/70 text-sm mb-2 font-title">Top Keywords</h4>
                        <div className="space-y-2">
                          {[
                            "online payment processing",
                            "secure transactions",
                            "online transaction platform",
                            "online shopping payments",
                            "e-commerce payment gateway",
                            "B2B payment processing",
                            "safe online payments",
                          ].map((keyword, index) => (
                            <div key={index} className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-[#9c55ff] shadow-[0_0_5px_rgba(156,85,255,0.5)]"></div>
                                <span className="text-white/80 text-sm">{keyword}</span>
                              </div>
                              <button>
                                <MoreHorizontal className="w-4 h-4 text-white/60" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Traffic Card */}
                  <div className="dashboard-card rounded-md p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-white/70 text-sm font-title">Traffic</h3>
                        <div className="flex items-end gap-2">
                          <span className="text-white text-3xl font-semibold font-title">59.8K</span>
                          <span className="text-[#4ade80] text-sm mb-1">+10.7%</span>
                        </div>
                      </div>
                      <button>
                        <CircleEllipsis className="w-4 h-4 text-white/60" />
                      </button>
                    </div>

                    <div className="h-24 mt-4">
                      {/* Chart Visualization */}
                      <svg width="100%" height="100%" viewBox="0 0 300 100" preserveAspectRatio="none">
                        <path
                          d="M0,80 C30,75 60,85 90,70 C120,55 150,65 180,60 C210,55 240,45 270,20 C280,15 290,10 300,5"
                          fill="none"
                          stroke="#9c55ff"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

