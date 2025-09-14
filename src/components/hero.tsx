import { Button } from "@/components/ui/button"
import { ArrowDown, Download, LinkedinLogo, GithubLogo, Sparkle, Code, Laptop, LinkSimple } from "@phosphor-icons/react"

export function Hero() {
  const scrollToAbout = () => {
    const aboutElement = document.getElementById('about')
    aboutElement?.scrollIntoView({ behavior: 'smooth' })
  }

  // Calculate years of experience from February 2020
  const calculateYearsOfExperience = () => {
    const startDate = new Date('2020-02-01') // February 2020
    const currentDate = new Date()
    const diffInMilliseconds = currentDate.getTime() - startDate.getTime()
    const yearsOfExperience = diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25)
    return Math.floor(yearsOfExperience)
  }

  const yearsExp = calculateYearsOfExperience()

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Hero-specific background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/10" />
      
      {/* Floating Tech Badges */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary tech skills */}
        <div className="absolute top-24 left-16 md:left-16 animate-float-1 opacity-70" style={{ animationDelay: '0s' }}>
          <div className="floating-badge badge-hover-glow bg-primary/10 border border-primary/20 rounded-full px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium text-primary backdrop-blur-sm">
            iOS
          </div>
        </div>
        <div className="absolute top-32 right-20 md:right-20 animate-float-2 opacity-60" style={{ animationDelay: '1.5s' }}>
          <div className="floating-badge badge-hover-glow bg-accent/10 border border-accent/20 rounded-full px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium text-accent backdrop-blur-sm">
            Swift
          </div>
        </div>
        <div className="absolute top-60 left-1/4 md:left-1/4 animate-float-3 opacity-50" style={{ animationDelay: '3s' }}>
          <div className="floating-badge badge-hover-glow bg-secondary/10 border border-secondary/20 rounded-full px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium text-secondary-foreground backdrop-blur-sm">
            Full Stack
          </div>
        </div>
        <div className="absolute bottom-40 right-16 md:right-16 animate-float-1 opacity-65" style={{ animationDelay: '0.5s' }}>
          <div className="floating-badge badge-hover-glow bg-primary/10 border border-primary/20 rounded-full px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium text-primary backdrop-blur-sm">
            Web
          </div>
        </div>
        <div className="absolute bottom-60 left-20 md:left-20 animate-float-2 opacity-55" style={{ animationDelay: '2.5s' }}>
          <div className="floating-badge badge-hover-glow bg-accent/10 border border-accent/20 rounded-full px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium text-accent backdrop-blur-sm">
            Cloud
          </div>
        </div>
        <div className="absolute top-80 right-1/3 md:right-1/3 animate-float-3 opacity-60" style={{ animationDelay: '4s' }}>
          <div className="floating-badge badge-hover-glow bg-chart-4/10 border border-chart-4/20 rounded-full px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium text-chart-4 backdrop-blur-sm">
            AI
          </div>
        </div>
        <div className="absolute bottom-32 left-1/3 md:left-1/3 animate-float-1 opacity-50" style={{ animationDelay: '1s' }}>
          <div className="floating-badge badge-hover-glow bg-chart-2/10 border border-chart-2/20 rounded-full px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium text-chart-2 backdrop-blur-sm">
            Copilot
          </div>
        </div>
        <div className="absolute top-48 left-1/2 md:left-1/2 animate-float-2 opacity-45 hidden md:block" style={{ animationDelay: '2s' }}>
          <div className="floating-badge badge-hover-glow bg-chart-3/10 border border-chart-3/20 rounded-full px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium text-chart-3 backdrop-blur-sm">
            React
          </div>
        </div>
        {/* Additional floating icons for visual balance */}
        <div className="absolute top-36 right-1/4 text-primary/15 animate-float-3 hidden lg:block" style={{ animationDelay: '3.5s' }}>
          <Code size={24} />
        </div>
        <div className="absolute bottom-48 right-1/3 text-accent/15 animate-float-1 hidden lg:block" style={{ animationDelay: '0.8s' }}>
          <Sparkle size={20} />
        </div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Main Content */}
        <div className="max-w-5xl mx-auto text-center">
          {/* Text Content */}
          <div className="animate-fade-in-up">
            {/* Greeting */}
            <div className="inline-flex items-center gap-2 bg-card border rounded-full px-6 py-3 mb-8 text-sm font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available for new connections
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-foreground">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x bg-300% bg-position-0">
                Rajat Jain
              </span>
            </h1>

            {/* Subtitle with Animation */}
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-medium">
              <span className="inline-block animate-slide-in-left">Software Engineer</span>
              <span className="mx-2 text-primary">•</span>
              <span className="inline-block animate-slide-in-left" style={{ animationDelay: '0.2s' }}>Problem Solver</span>
              <span className="mx-2 text-primary">•</span>
              <span className="inline-block animate-slide-in-left" style={{ animationDelay: '0.4s' }}>Tech Enthusiast</span>
            </h2>

            {/* Description */}
            <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
              I build{" "}
              <span className="text-primary font-semibold">exceptional digital experiences</span>{" "}
              that solve real-world problems. Passionate about clean code, modern technologies, 
              and creating{" "}
              <span className="text-accent font-semibold">scalable solutions</span>{" "}
              that make a difference.
              {/* Rajat: Insert personalized bio from LinkedIn */}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 py-4 h-auto group btn-primary">
                <Download size={20} className="mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-6 py-3 h-auto group btn-secondary"
                onClick={() => window.open('https://linkedin.com/in/rajatjain-cs/', '_blank')}
              >
                <LinkedinLogo size={18} className="mr-2 group-hover:text-primary transition-colors" />
                LinkedIn Profile
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-6 py-3 h-auto group btn-secondary"
                onClick={() => window.open('https://github.com/cyberscorpion', '_blank')}
              >
                <GithubLogo size={18} className="mr-2 group-hover:text-primary transition-colors" />
                GitHub Profile
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-6 py-3 h-auto group btn-secondary"
                onClick={() => window.open('https://linktr.ee/RajatJain', '_blank')}
              >
                <LinkSimple size={18} className="mr-2 group-hover:text-primary transition-colors" />
                All Links
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="animate-fade-in-up grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-2xl mx-auto" style={{ animationDelay: '0.5s' }}>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">{yearsExp}+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide">Dedication</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={scrollToAbout}
            className="animate-bounce rounded-full p-4 hover:bg-accent/20 group"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={24} className="group-hover:text-primary transition-colors" />
          </Button>
        </div>
      </div>
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}