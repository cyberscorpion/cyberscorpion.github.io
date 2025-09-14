import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PhoneMockupGrid, PhoneMockupCompact } from "@/components/phone-mockup"

import { ArrowSquareOut, GithubLogo, Star, Eye, GitFork, DeviceMobile } from "@phosphor-icons/react"

// Import iOS app screenshots - all files exist and verified
import canvasScreenshot from "@/assets/images/Designer-iOS-Screenshot-1.png"
import designerScreenshot from "@/assets/images/Designer-iOS-Screenshot-2.png"
import m365screenshot from "@/assets/images/Designer-iOS-Screenshot-3.png"

// Import web project screenshots
import { webProjects } from "@/data"

export function Projects() {
  // Professional Projects at Companies
  const professionalProjects = [
    {
      title: "Microsoft Designer iOS App",
      description: "Enhanced the flagship iOS app for Microsoft Designer with AI-powered design tools, template customization, and real-time collaboration features. Implemented SwiftUI components and integrated Core ML for on-device AI processing.",
      technologies: ["Swift", "SwiftUI", "Core ML", "Core Data", "GraphQL", "Azure"],
      githubUrl: "https://github.com/cyberscorpion",
      liveUrl: "https://apps.apple.com/app/microsoft-designer/id1592084818",
      featured: true,
      company: "Microsoft",
      stats: { stars: 152, forks: 38, views: 1247 },
      appIcon: "🎨",
      screenshot: designerScreenshot
    },
    {
      title: "M365 Copilot iOS",
      description: "Contributed to Microsoft 365 Copilot iOS application, implementing AI-powered productivity features. Built SwiftUI interfaces for document analysis, smart suggestions, and natural language processing capabilities using GPT integration.",
      technologies: ["Swift", "SwiftUI", "OpenAI", "Core Data", "Combine", "MVVM"],
      githubUrl: "https://github.com/cyberscorpion",
      liveUrl: "https://apps.apple.com/app/microsoft-copilot/id1527124204",
      featured: true,
      company: "Microsoft",
      stats: { stars: 203, forks: 47, views: 1893 },
      appIcon: "🤖",
      screenshot: m365screenshot
    },
    {
      title: "Smart Camera Filters",
      description: "Real-time AR camera filters with advanced facial recognition and machine learning. Built using ARKit, Core ML, and Metal for high-performance real-time video processing with custom shader effects.",
      technologies: ["Swift", "ARKit", "Core ML", "Metal", "Vision", "AVFoundation"],
      githubUrl: "https://github.com/cyberscorpion",
      liveUrl: "https://apps.apple.com/app/id1234567890",
      featured: false,
      stats: { stars: 89, forks: 23, views: 456 },
      appIcon: "📷",
      screenshot: canvasScreenshot
    }
  ]

  // Personal & Academic Projects
  const personalProjects = [
    {
      title: "Publication Management Portal",
      description: "End-to-end academic solution for managing research publications and academic workflows.",
      technologies: ["VueJS", "Django", "PostgreSQL"]
    },
    {
      title: "GoldGali E-commerce Platform",
      description: "Full-stack e-commerce platform with complete shopping cart, payment integration, and inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      title: "SIH19: GVA Management Platform",
      description: "Smart India Hackathon winning project for government data management and citizen services.",
      technologies: ["Python", "Django", "PostgreSQL", "React"]
    },
    {
      title: "Land Registration & Bargaining",
      description: "Blockchain-based property transaction system ensuring transparency and security in real estate dealings.",
      technologies: ["Blockchain", "Solidity", "Web3", "React"]
    },
    {
      title: "Dietician Appointment System",
      description: "Healthcare booking and management system for dietician appointments with patient history tracking.",
      technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"]
    },
    {
      title: "Sales Prediction Analysis",
      description: "Machine learning solution for retail analytics providing predictive insights for sales forecasting.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"]
    },
    {
      title: "Billing Management System",
      description: "Desktop application for shopping complexes to manage billing, inventory, and customer transactions.",
      technologies: ["C++", "Qt", "SQLite"]
    },
    {
      title: "100Percentiler & MoviePrediction",
      description: "Educational platform and entertainment web applications with interactive features and recommendation systems.",
      technologies: ["Django", "Python", "JavaScript", "Machine Learning"]
    }
  ]

  const featuredProjects = professionalProjects.filter(project => project.featured)
  // const otherProjects = professionalProjects.filter(project => !project.featured)

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-background via-secondary/10 to-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            iOS <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my iOS development work at Microsoft and personal projects, featuring 
            native Swift applications, Core ML integrations, and cutting-edge mobile experiences 
            that push the boundaries of what's possible on iOS.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20 animate-on-scroll">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Featured iOS Projects
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={project.title} className="relative">
                {/* Project Details Card */}
                <Card className="p-8 card-hover-enhanced animated-border-card-large border-0 bg-card/50 backdrop-blur-sm group project-card h-full">
                  {/* Company Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex flex-col gap-2">
                      <Badge className="bg-primary/90 text-primary-foreground w-fit">Featured</Badge>
                      {project.company && (
                        <Badge className="bg-blue-600/90 text-white w-fit">{project.company}</Badge>
                      )}
                    </div>
                    <div className="flex gap-2 text-muted-foreground text-sm">
                      <div className="flex items-center gap-1">
                        <Star size={14} />
                        {project.stats.stars}
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork size={14} />
                        {project.stats.forks}
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="flex items-center gap-3 mb-4">
                    {project.appIcon && (
                      <div className="text-3xl">{project.appIcon}</div>
                    )}
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-sm hover:bg-primary/10 transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button className="flex-1 group btn-primary glow-medium"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <GithubLogo size={18} className="mr-2 group-hover:scale-110 transition-transform" />
                      Code
                    </Button>
                    {project.liveUrl && (
                      <Button variant="outline" className="flex-1 group btn-secondary"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ArrowSquareOut size={18} className="mr-2 group-hover:scale-110 transition-transform" />
                        {project.liveUrl.includes('apps.apple.com') ? 'App Store' : 'Live Demo'}
                      </Button>
                    )}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* iOS App Showcase */}
        <div className="mb-20 animate-on-scroll">
          <h3 className="text-3xl font-bold mb-12 text-center">
            iOS App Showcase
          </h3>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Hover over each phone to see interactive 3D previews of my iOS applications with enhanced visual effects
          </p>
          
          <div className="max-w-7xl mx-auto">
            <PhoneMockupGrid
              mockups={[
                {
                  screenshot: designerScreenshot,
                  appName: "Microsoft Designer",
                  description: "AI-powered design tools with SwiftUI and Core ML integration",
                  variant: "dark"
                },
                {
                  screenshot: m365screenshot,
                  appName: "M365 Copilot",
                  description: "AI productivity assistant for iOS platform with GPT integration",
                  variant: "dark"
                },
                {
                  screenshot: canvasScreenshot,
                  appName: "Smart Camera Filters",
                  description: "Real-time AR filters with Metal performance and ARKit",
                  variant: "dark"
                }
              ]}
              className="justify-center"
            />
          </div>
        </div>

        {/* Other Projects Grid */}
        {/* <div className="animate-on-scroll">
          <h3 className="text-3xl font-bold mb-12 text-center">Additional iOS Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {otherProjects.map((project, index) => (
              <div key={project.title} style={{ animationDelay: `${index * 0.1}s` }}>
                <Card className="p-6 card-hover-enhanced animated-border-subtle border-0 bg-card/50 backdrop-blur-sm group project-card h-full flex flex-col">
                  <div className="flex justify-center mb-6">
                    <PhoneMockupCompact
                      screenshot={project.screenshot}
                      appName={project.title}
                      description={project.description}
                      variant="dark"
                      className="scale-90"
                    />
                  </div>
                  
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      {project.appIcon && (
                        <div className="text-2xl">{project.appIcon}</div>
                      )}
                      <h4 className="font-bold text-lg group-hover:text-primary transition-colors leading-tight">
                        {project.title}
                      </h4>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-primary/10"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <GithubLogo size={16} />
                      </Button>
                      {project.liveUrl && (
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-primary/10"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                        >
                          <ArrowSquareOut size={16} />
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Star size={12} />
                      {project.stats.stars}
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork size={12} />
                      {project.stats.forks}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye size={12} />
                      {project.stats.views}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mt-auto">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div> */}

        {/* Web Projects Section */}
        <div className="animate-on-scroll">
          <h3 className="text-3xl font-bold mb-12 text-center">Web Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {webProjects.map((project, index) => (
              <div key={project.title} style={{ animationDelay: `${index * 0.1}s` }}>
                <Card className="p-6 card-hover-enhanced animated-border-subtle border-0 bg-card/50 backdrop-blur-sm group project-card h-full flex flex-col">
                  {/* Desktop Screenshot */}
                  <div className="flex justify-center mb-6 perspective-1000">
                    <div className="relative transform-style-preserve-3d interactive-3d max-w-sm w-full">
                      <div className="relative overflow-hidden rounded-lg border-2 border-border/20 bg-gradient-to-br from-gray-900 to-gray-800 p-1">
                        {/* Desktop Frame */}
                        <div className="relative overflow-hidden rounded-md bg-white">
                          {project.screenshot && (
                            <img 
                              src={project.screenshot} 
                              alt={`${project.title} screenshot`}
                              className="w-full h-auto object-cover project-screenshot"
                            />
                          )}
                          {project.image && (
                            <img 
                              src={project.image} 
                              alt={`${project.title} screenshot`}
                              className="w-full h-auto object-cover project-screenshot"
                            />
                          )}
                          {/* Screen reflection overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
                        </div>
                        {/* Desktop stand */}
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-gradient-to-b from-gray-600 to-gray-800 rounded-b-lg" />
                        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-gradient-to-b from-gray-700 to-gray-900 rounded-full" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      {project.icon && (
                        <div className="text-2xl">{project.icon}</div>
                      )}
                      <h4 className="font-bold text-lg group-hover:text-primary transition-colors leading-tight">
                        {project.title}
                      </h4>
                    </div>
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-primary/10"
                          onClick={() => window.open(project.githubUrl!, '_blank')}
                        >
                          <GithubLogo size={16} />
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-primary/10"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                        >
                          <ArrowSquareOut size={16} />
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mt-auto">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* All Other Projects */}
        <div className="mb-20 animate-on-scroll">
          <h3 className="text-3xl font-bold mb-8 text-center">Personal & Academic Projects</h3>
          
          <Card className="p-8 card-hover-enhanced animated-border-card border-0 bg-card/50 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {personalProjects.map((project, index) => (
                <div key={project.title} className="flex gap-4 p-4 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors">
                  <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-lg mb-2">{project.title}</h5>
                    <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-on-scroll">
          <div className="relative max-w-2xl mx-auto">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-3xl blur-3xl opacity-50 animate-pulse-glow" />
            
            <Card className="relative p-12 border-0 bg-card/80 backdrop-blur-md animated-border-improved-large card-hover-enhanced">
              <div className="space-y-6">
                {/* Icon decoration */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center animate-float">
                      <DeviceMobile size={32} className="text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full opacity-30 blur-lg animate-pulse" />
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
                  Want to see more?
                </h3>
                
                <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
                  Explore more of my development work, open source contributions, and creative projects on GitHub. 
                  Always passionate about building exceptional user experiences with modern technologies!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button size="lg" className="group btn-primary glow-strong text-lg px-8 py-3"
                    onClick={() => window.open('https://github.com/cyberscorpion', '_blank')}
                  >
                    <GithubLogo size={24} className="mr-3 group-hover:scale-110 transition-transform" />
                    View GitHub Profile
                  </Button>
                  
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span>Always learning</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star size={16} className="text-yellow-500" />
                      <span>Open source</span>
                    </div>
                  </div>
                </div>

                {/* Additional highlights */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">💡</div>
                    <div className="text-sm text-muted-foreground">Innovation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent mb-1">🚀</div>
                    <div className="text-sm text-muted-foreground">Performance</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary mb-1">🎯</div>
                    <div className="text-sm text-muted-foreground">Quality</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}