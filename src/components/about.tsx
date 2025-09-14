import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, GraduationCap, Briefcase, Trophy, Target, Heart, Lightbulb, YoutubeLogo, Play, Users, Certificate } from "@phosphor-icons/react"
import { skills, experience, certifications, personalValues, contactInfo, education } from "@/data"

// Microsoft Logo Component
const MicrosoftLogo = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h11v11H0z" fill="#f25022"/>
    <path d="M12 0h11v11H12z" fill="#7fba00"/>
    <path d="M0 12h11v11H0z" fill="#00a4ef"/>
    <path d="M12 12h11v11H12z" fill="#ffb900"/>
  </svg>
)

export function About() {
  const values = personalValues.map((value, index) => ({
    ...value,
    icon: index === 0 ? <Target size={24} /> : index === 1 ? <Heart size={24} /> : <Lightbulb size={24} />
  }))
  
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A passionate, results-driven full-stack software engineer with expertise spanning 
            web development, iOS applications, cloud technologies, and AI integrations. 
            Currently building next-generation design experiences at Microsoft while actively 
            mentoring thousands of aspiring developers.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 animate-on-scroll">
          {values.map((value, index) => (
            <Card key={index} className="p-6 text-center card-hover-enhanced animated-border-subtle border-0 bg-card/50 backdrop-blur-sm">
              <div className="text-primary mb-4 flex justify-center">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </Card>
          ))}
        </div>

        {/* YouTube Channel Highlight */}
        <div className="mb-20 animate-on-scroll">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-red-500/10 via-card/80 to-red-600/10 border border-red-500/20 p-8 text-center transition-all duration-300 hover:shadow-xl hover:shadow-red-500/20 hover:-translate-y-2 cursor-pointer">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/5" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-600/10 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="p-4 bg-red-500/20 rounded-full">
                    <YoutubeLogo size={40} className="text-red-500" weight="fill" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Follow My <span className="text-red-500">Coding Journey</span>
              </h3>
              
              <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
                Join me on YouTube where I share coding tutorials, tech insights, 
                and behind-the-scenes of my development projects. Let's learn and grow together!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 h-auto group text-lg"
                  onClick={() => window.open(`${contactInfo.youtube}?sub_confirmation=1`, '_blank')}
                >
                  <YoutubeLogo size={20} className="mr-2" weight="fill" />
                  Subscribe Now
                  <Users size={16} className="ml-2 group-hover:scale-110 transition-transform" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-red-500/30 text-red-500 hover:bg-red-500/10 px-8 py-4 h-auto group text-lg"
                  onClick={() => window.open(contactInfo.youtube, '_blank')}
                >
                  <Play size={20} className="mr-2 group-hover:text-red-400 transition-colors" />
                  Watch Videos
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          {/* Left Section - Larger */}
          {/* Experience & Education */}
          <div className="lg:col-span-3 space-y-8 animate-on-scroll">
            <Card className="p-6 card-hover-enhanced animated-border-subtle border-0 bg-card/50 backdrop-blur-sm card">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Briefcase size={20} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Experience</h3>
              </div>
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <div key={index} className="relative">
                    <div className={`border-l-2 ${index === 0 ? 'border-blue-500/50' : 'border-primary/30'} pl-4 pb-4`}>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-lg leading-tight">{job.title}</h4>
                        {job.company === "Microsoft" && (
                          <div className="flex items-center gap-1 p-1 bg-blue-50 dark:bg-blue-950/30 rounded">
                            <MicrosoftLogo size={16} />
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className={`font-medium ${job.company === "Microsoft" ? 'text-blue-600 dark:text-blue-400' : job.company === "Amazon" ? 'text-orange-600 dark:text-orange-400' : 'text-primary'}`}>
                          {job.company}
                        </p>
                        {job.company === "Microsoft" && (
                          <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs">
                            Current
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{job.period}</p>
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{job.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {job.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 card-hover-enhanced animated-border-subtle border-0 bg-card/50 backdrop-blur-sm card">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Certificate size={20} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Certifications</h3>
              </div>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {certifications.map((cert, index) => (
                  <div key={index} className="p-3 rounded-lg bg-secondary/10 border border-secondary/20 hover:bg-secondary/20 transition-colors">
                    <h5 className="font-semibold text-sm leading-tight mb-1">{cert.title}</h5>
                    <div className="flex flex-wrap gap-2 items-center">
                      <Badge variant="outline" className="text-xs">{cert.issuer}</Badge>
                      <Badge variant="secondary" className="text-xs">{cert.category}</Badge>
                      <span className="text-xs text-muted-foreground">{cert.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right section - Smaller */}
          {/* Skills Section */}
          <div className="lg:col-span-2 space-y-8 animate-on-scroll">
            <Card className="p-8 card-hover-enhanced animated-border-card-large border-0 bg-card/50 backdrop-blur-sm card">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Code size={24} className="text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Technical Expertise</h3>
              </div>
              
              {/* Skills Grid */}
              <div className="grid grid-cols-1 gap-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{skill.name}</span>
                        <Badge variant="outline" className="text-xs">{skill.category}</Badge>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 card-hover-enhanced animated-border-subtle border-0 bg-card/50 backdrop-blur-sm card">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <GraduationCap size={20} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">{education[0].degree.split(' in ')[0]}</h4>
                  <p className="text-primary font-medium">{education[0].degree.split(' in ')[1]}</p>
                  <p className="text-sm text-muted-foreground">{education[0].institution} • {education[0].period}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Personal Statement */}
        <div className="animate-on-scroll">
          <Card className="p-8 text-center card-hover-enhanced animated-border-card-large border-0 bg-gradient-to-r from-primary/5 to-accent/5">
            <blockquote className="text-lg text-muted-foreground italic max-w-3xl mx-auto leading-relaxed">
              "I believe technology should empower creativity and enhance human potential. 
              Working at Microsoft on tools like Designer and Copilot, my goal is to build 
              intuitive experiences that help people bring their ideas to life."
            </blockquote>
            <p className="text-foreground font-semibold mt-4">- Rajat Jain</p>
          </Card>
        </div>
      </div>
    </section>
  )
}