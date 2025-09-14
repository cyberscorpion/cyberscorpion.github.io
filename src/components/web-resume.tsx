import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowUpRight, 
  GithubLogo, 
  LinkedinLogo, 
  EnvelopeSimple,
  MapPin,
  Download,
  CaretUp,
  CaretDown,
  ArrowLeft,
  LinkSimple,
  YoutubeLogo
} from "@phosphor-icons/react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { mainNavigationSections, contactInfo, education, certifications, webProjects, basicProjects } from "@/data"

// Microsoft Logo Component
const MicrosoftLogo = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h11v11H0z" fill="#f25022"/>
    <path d="M12 0h11v11H12z" fill="#7fba00"/>
    <path d="M0 12h11v11H0z" fill="#00a4ef"/>
    <path d="M12 12h11v11H12z" fill="#ffb900"/>
  </svg>
)

interface WebResumeProps {
  onBackToHome?: () => void
}

export function WebResume({ onBackToHome }: WebResumeProps) {
  const [activeSection, setActiveSection] = useState('about')
  const [isScrolled, setIsScrolled] = useState(false)

  // Initialize scroll animations
  useScrollAnimation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
      
      // Update active section based on scroll position
      const sections = ['about', 'experience', 'projects', 'skills', 'certifications', 'education']
      
      // Check if we're near the bottom of the page (within 200px)
      const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 200
      
      if (nearBottom) {
        // If we're near the bottom, always activate the last section (education)
        setActiveSection('education')
        return
      }
      
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 200 && rect.bottom >= 200
        }
        return false
      })
      
      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setActiveSection(id)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const sections = mainNavigationSections

  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      {/* Fixed Navigation Sidebar */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <nav className="flex flex-col space-y-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === section.id 
                  ? 'bg-primary scale-125' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
              }`}
              title={section.label}
            />
          ))}
        </nav>
      </div>

      {/* Scroll to Top Button */}
      {isScrolled && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-4 sm:right-8 z-40 rounded-full w-12 h-12 p-0 shadow-lg"
          size="sm"
        >
          <CaretUp size={20} />
        </Button>
      )}

      {/* Back to Home Button */}
      <Button
        onClick={onBackToHome || (() => window.history.back())}
        variant="outline"
        className="fixed top-24 right-4 sm:right-8 z-40 flex items-center gap-2 bg-background/90 backdrop-blur-sm border-border hover:bg-card transition-all duration-200 shadow-lg"
        size="sm"
      >
        <ArrowLeft size={16} />
        <span className="hidden sm:inline">Back to Home</span>
      </Button>

      {/* Main Content */}
      <div className="lg:flex lg:min-h-screen">
        {/* Left Column - Header */}
        <div className="lg:w-1/2 lg:fixed lg:h-screen flex flex-col justify-center p-8 lg:p-24">
          <div className="max-w-md">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Rajat Jain
            </h1>
            <h2 className="text-xl lg:text-2xl font-medium mb-6 text-primary">
              Full-Stack Engineer, Educator & Mentor
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Full-stack software engineer at Microsoft with expertise in iOS development, 
              AI integrations, and scalable web applications. Passionate about mentoring 
              developers and building products that make a difference.
            </p>

            {/* Navigation Links - Desktop */}
            <nav className="hidden lg:block mb-8">
              <ul className="space-y-4">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className={`group flex items-center py-2 text-sm font-medium uppercase tracking-widest transition-all duration-300 ${
                        activeSection === section.id
                          ? 'text-foreground'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <span className={`mr-4 h-px transition-all duration-300 bg-muted-foreground group-hover:bg-foreground ${
                        activeSection === section.id ? 'w-16 bg-foreground' : 'w-8'
                      }`} />
                      {section.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <EnvelopeSimple size={16} />
                {contactInfo.email}
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin size={16} />
                {contactInfo.location}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mb-8">
              <Button variant="ghost" size="sm" className="p-2 hover:bg-primary/10"
                onClick={() => window.open(contactInfo.github, '_blank')}
              >
                <GithubLogo size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-primary/10"
                onClick={() => window.open(contactInfo.linkedin, '_blank')}
              >
                <LinkedinLogo size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-primary/10"
                onClick={() => window.open(`${contactInfo.youtube}?sub_confirmation=1`, '_blank')}
              >
                <YoutubeLogo size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-primary/10"
                onClick={() => window.open(contactInfo.linktree, '_blank')}
              >
                <LinkSimple size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-primary/10"
                onClick={() => window.open(`mailto:${contactInfo.email}`, '_blank')}
              >
                <EnvelopeSimple size={20} />
              </Button>
            </div>

            {/* Download Resume Button */}
            <Button className="flex items-center gap-2 w-fit group">
              <Download size={18} className="group-hover:animate-bounce" />
              Download Resume
            </Button>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="lg:w-1/2 lg:ml-auto p-8 lg:p-24 lg:py-32">
          <div className="max-w-2xl space-y-24">
            
            {/* About Section */}
            <section id="about" className="animate-on-scroll">
              <h3 className="text-2xl font-bold mb-6 lg:hidden">About</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate Software Engineer 2 at Microsoft, currently working on iOS platform development 
                  for Designer and M365 Copilot applications. I have extensive experience building user-facing 
                  features and enhancing user experiences across both mobile and web platforms.
                </p>
                <p>
                  My expertise spans iOS development with Swift, modern web technologies including React and TypeScript, 
                  and Microsoft's ecosystem including Azure and M365 platforms. I previously contributed to the 
                  Designer web platform, focusing on creating intuitive and efficient design tools.
                </p>
                <p>
                  I'm passionate about creating seamless user experiences and building products that empower creativity 
                  and productivity. When I'm not coding, you can find me sharing knowledge through my YouTube channel 
                  and exploring new technologies in the ever-evolving world of software development.
                </p>
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="animate-on-scroll">
              <h3 className="text-2xl font-bold mb-8 lg:hidden">Experience</h3>
              <div className="space-y-12">
                {/* Experience Item 1 - Microsoft */}
                <div className="group">
                  <Card className="p-6 card-hover-enhanced animated-border-subtle border-0 bg-card/50 backdrop-blur-sm border-l-4 border-l-blue-500">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
                            Software Engineer 2
                          </h4>
                          <div className="flex items-center gap-1 p-1 bg-blue-50 dark:bg-blue-950/30 rounded">
                            <MicrosoftLogo size={16} />
                          </div>
                          <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs">
                            Current
                          </Badge>
                        </div>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">
                          Microsoft India
                        </p>
                      </div>
                      <span className="text-sm text-muted-foreground mt-1 lg:mt-0">
                        Oct 2021 — Present
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Working on iOS platform for Designer and M365 Copilot applications, building intuitive user experiences 
                      and implementing innovative features. Previously contributed to Designer web platform, focusing on 
                      user-facing features and enhancing overall user experience across Microsoft's design tools ecosystem.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['iOS', 'Swift', 'React', 'TypeScript', 'Azure', 'M365', 'Designer', 'Copilot', 'AI'].map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>

                {/* Experience Item 2 - Amazon */}
                <div className="group">
                  <Card className="p-6 card-hover-enhanced animated-border-subtle border-0 bg-card/50 backdrop-blur-sm border-l-4 border-l-orange-500">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
                          Software Development Engineer
                        </h4>
                        <p className="text-orange-600 dark:text-orange-400 font-medium">
                          Amazon India
                        </p>
                      </div>
                      <span className="text-sm text-muted-foreground mt-1 lg:mt-0">
                        Feb 2020 — Sep 2021
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Built Tier-1 services for Amazon DSP, transforming invoicing and launching in new regions (CA, EU). 
                      Developed Bulksheet management for advertisers, automating workflows and saving developer/customer time.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Java', 'React', 'AWS', 'Microservices', 'DSP'].map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>

                {/* Experience Item 3 - The Solar Labs */}
                <div className="group">
                  <Card className="p-6 card-hover-enhanced animated-border-subtle border-0 bg-card/50 backdrop-blur-sm">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
                          Full-Stack Developer
                        </h4>
                        <p className="text-primary font-medium">
                          The Solar Labs
                        </p>
                      </div>
                      <span className="text-sm text-muted-foreground mt-1 lg:mt-0">
                        May 2019 — Nov 2019
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Designed Django/VueJS back-ends and front-ends, integrated Google Docs and Maps APIs, 
                      and managed AWS deployments for solar energy management platforms.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Django', 'Vue.js', 'React', 'Python', 'AWS', 'Google APIs'].map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>

                {/* Experience Item 4 - Creesync */}
                <div className="group">
                  <Card className="p-6 card-hover-enhanced animated-border-subtle border-0 bg-card/50 backdrop-blur-sm">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
                          Full-Stack Developer & Mentor
                        </h4>
                        <p className="text-primary font-medium">
                          Creesync Software (FarziEngineer)
                        </p>
                      </div>
                      <span className="text-sm text-muted-foreground mt-1 lg:mt-0">
                        Nov 2018 — May 2019
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Delivered web applications from scratch, managed production deployments, and mentored junior developers 
                      in full-stack development practices.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Web Development', 'Mentoring', 'Production', 'Full-Stack'].map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            </section>

            {/* iOS Projects Section */}
            <section id="projects" className="animate-on-scroll">
              <h3 className="text-2xl font-bold mb-8 lg:hidden">Projects</h3>
              <div className="space-y-16">
                {/* iOS Projects Header */}
                <div>
                  <h4 className="text-xl font-semibold mb-6 text-primary">iOS Projects</h4>
                  <div className="space-y-8">
                    {/* Designer iOS Project */}
                    <div className="group perspective-1200">
                      <Card className="p-8 card-hover-enhanced animated-border-improved border-0 bg-card/50 backdrop-blur-sm overflow-hidden">
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                          <div className="order-2 lg:order-1">
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <h5 className="text-lg font-semibold group-hover:text-primary transition-colors mb-2">
                                  Microsoft Designer iOS
                                </h5>
                                <p className="text-sm text-primary font-medium">iOS Platform Development</p>
                              </div>
                              <div className="flex gap-2">
                                <Button variant="ghost" size="sm" className="p-2 hover:bg-primary/10">
                                  <ArrowUpRight size={16} />
                                </Button>
                              </div>
                            </div>
                            <p className="text-muted-foreground mb-4 leading-relaxed">
                              Working on iOS platform for Microsoft Designer, building intuitive user experiences 
                              and implementing innovative features. Contributing to the mobile ecosystem of Microsoft's 
                              creative design tools.
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {['iOS', 'Swift', 'UIKit', 'SwiftUI', 'Core Data', 'Microsoft Graph', 'Azure'].map((tech) => (
                                <Badge key={tech} variant="secondary" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="order-1 lg:order-2 flex justify-center">
                            <div className="phone-3d-hover interactive-3d shadow-3d-medium">
                              <div className="iphone-frame w-48 h-96 rounded-[2.5rem] p-2 relative overflow-hidden">
                                <div className="w-full h-full rounded-[2rem] overflow-hidden bg-black relative">
                                  {/* Dynamic Island */}
                                  <div className="dynamic-island absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-6 rounded-full z-10"></div>
                                  
                                  {/* Screen Content */}
                                  <div className="w-full h-full relative">
                                    <img 
                                      src="/src/assets/images/Designer-iOS-Screenshot-2.png" 
                                      alt="Microsoft Designer iOS App"
                                      className="w-full h-full object-cover rounded-[2rem]"
                                    />
                                    {/* Screen Reflection */}
                                    <div className="screen-reflection absolute inset-0 rounded-[2rem] pointer-events-none"></div>
                                  </div>
                                </div>
                                
                                {/* Side buttons */}
                                <div className="phone-button absolute left-0 top-16 w-1 h-8 rounded-r-sm"></div>
                                <div className="phone-button absolute left-0 top-28 w-1 h-12 rounded-r-sm"></div>
                                <div className="phone-button absolute left-0 top-44 w-1 h-12 rounded-r-sm"></div>
                                <div className="phone-button absolute right-0 top-20 w-1 h-16 rounded-l-sm"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>

                {/* Web Projects Header */}
                <div>
                  <h4 className="text-xl font-semibold mb-6 text-primary">Web Projects</h4>
                  <div className="grid lg:grid-cols-2 gap-8">
                    {webProjects.slice(0, 2).map((project, index) => (
                      <div key={project.title} className="group">
                        <Card className="p-6 card-hover-enhanced animated-border-subtle border-0 bg-card/50 backdrop-blur-sm overflow-hidden">
                          <div className="space-y-4">
                            {/* Desktop Screenshot */}
                            {project.image && (
                              <div className="relative">
                                <div className="project-screenshot rounded-lg overflow-hidden shadow-lg">
                                  <img 
                                    src={project.image}
                                    alt={`${project.title} Screenshot`}
                                    className="w-full h-auto"
                                  />
                                </div>
                              </div>
                            )}
                            
                            <div className="space-y-3">
                              <div className="flex items-start justify-between">
                                <h5 className="text-lg font-semibold group-hover:text-primary transition-colors">
                                  {project.title}
                                </h5>
                                <div className="flex gap-2">
                                  {project.githubUrl && (
                                    <Button variant="ghost" size="sm" className="p-2 hover:bg-primary/10"
                                      onClick={() => window.open(project.githubUrl!, '_blank')}
                                    >
                                      <GithubLogo size={16} />
                                    </Button>
                                  )}
                                  {project.liveUrl && (
                                    <Button variant="ghost" size="sm" className="p-2 hover:bg-primary/10"
                                      onClick={() => window.open(project.liveUrl!, '_blank')}
                                    >
                                      <ArrowUpRight size={16} />
                                    </Button>
                                  )}
                                </div>
                              </div>
                              <p className="text-muted-foreground text-sm leading-relaxed">
                                {project.description}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                  <Badge key={tech} variant="secondary" className="text-xs">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Basic Projects Header */}
                <div>
                  <h4 className="text-xl font-semibold mb-6 text-primary">Other Projects</h4>
                  <div className="grid lg:grid-cols-2 gap-6">
                    {basicProjects.map((project, index) => (
                      <Card key={index} className="p-4 card-hover-enhanced animated-border-subtle border-0 bg-card/50 backdrop-blur-sm">
                        <div className="flex justify-between items-start mb-3">
                          <h5 className="text-base font-semibold">{project.title}</h5>
                          {project.company && (
                            <Badge className={`text-xs ${project.company === 'Microsoft' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' : 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'}`}>
                              {project.company}
                            </Badge>
                          )}
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="animate-on-scroll">
              <h3 className="text-2xl font-bold mb-8 lg:hidden">Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4">Mobile Development</h4>
                  <div className="flex flex-wrap gap-2">
                    {['iOS', 'Swift', 'Objective-C', 'Xcode', 'UIKit', 'SwiftUI', 'Core Data'].map((skill) => (
                      <Badge key={skill} variant="outline" className="text-sm hover:bg-primary/10 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Next.js'].map((skill) => (
                      <Badge key={skill} variant="outline" className="text-sm hover:bg-primary/10 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Microsoft Platform</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Azure', 'M365', 'Power Platform', 'Office 365', 'Copilot', 'Designer', '.NET'].map((skill) => (
                      <Badge key={skill} variant="outline" className="text-sm hover:bg-primary/10 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Tools & Other</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Git', 'Visual Studio', 'Figma', 'REST APIs', 'Agile', 'CI/CD', 'Unit Testing'].map((skill) => (
                      <Badge key={skill} variant="outline" className="text-sm hover:bg-primary/10 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </section>
            
            {/* Certifications Section */}
            <section id="certifications" className="animate-on-scroll">
              <h3 className="text-2xl font-bold mb-8 lg:hidden">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="p-4 card-hover-enhanced animated-border-subtle border-0 bg-card/50 backdrop-blur-sm">
                    <h4 className="font-semibold text-sm leading-tight mb-2">{cert.title}</h4>
                    <div className="flex flex-wrap gap-2 items-center">
                      <Badge variant="outline" className="text-xs">{cert.issuer}</Badge>
                      <Badge variant="secondary" className="text-xs">{cert.category}</Badge>
                      <span className="text-xs text-muted-foreground">{cert.year}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section id="education" className="animate-on-scroll">
              <h3 className="text-2xl font-bold mb-8 lg:hidden">Education</h3>
              <div className="space-y-8">
                <Card className="p-6 card-hover-enhanced animated-border-subtle border-0 bg-card/50 backdrop-blur-sm">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold">
                        {education[0].degree}
                      </h4>
                      <p className="text-primary font-medium">
                        {education[0].institution}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground mt-1 lg:mt-0">
                      {education[0].period}
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    {education[0].description}
                  </p>
                </Card>
              </div>
            </section>

            {/* Bottom spacer to ensure Education section can be properly scrolled to */}
            <div className="h-[600px]"></div>

          </div>
        </div>
      </div>
    </div>
  )
}