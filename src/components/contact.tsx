import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Envelope, LinkedinLogo, GithubLogo, MapPin, LinkSimple } from "@phosphor-icons/react"

export function Contact() {
  const contactMethods = [
    {
      icon: <Envelope size={24} />,
      label: "Email",
      value: "codense.in@gmail.com",
      href: "mailto:codense.in@gmail.com",
      color: "text-blue-600"
    },
    {
      icon: <LinkedinLogo size={24} />,
      label: "LinkedIn",
      value: "linkedin.com/in/rajatjain-cs",
      href: "https://linkedin.com/in/rajatjain-cs/",
      color: "text-blue-700"
    },
    {
      icon: <GithubLogo size={24} />,
      label: "GitHub",
      value: "github.com/cyberscorpion",
      href: "https://github.com/cyberscorpion",
      color: "text-gray-700 dark:text-gray-300"
    },
    {
      icon: <LinkSimple size={24} />,
      label: "Linktree",
      value: "linktr.ee/RajatJain",
      href: "https://linktr.ee/RajatJain",
      color: "text-green-600"
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Delhi/Noida/NCR, India",
      href: null,
      color: "text-red-600"
    }
  ]

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a conversation about technology and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12 animate-on-scroll">
          {contactMethods.map((method, index) => (
            <Card 
              key={method.label} 
              className="p-6 card-hover-enhanced animated-border-subtle transition-all duration-300 group cursor-pointer"
              onClick={() => method.href && window.open(method.href, '_blank')}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary mb-4 group-hover:scale-110 transition-transform ${method.color}`}>
                  {method.icon}
                </div>
                <h3 className="font-semibold mb-2">{method.label}</h3>
                <p className="text-sm text-muted-foreground break-all">
                  {method.value}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="animate-on-scroll">
          <Card className="p-8 text-center card-hover-enhanced animated-border-card-large">
            <h3 className="text-2xl font-semibold mb-4">Let's Work Together</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you have a project in mind, want to collaborate, or just want to connect, 
              I'd love to hear from you. Feel free to reach out through any of the channels above.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 btn-primary"
                onClick={() => window.open('mailto:codense.in@gmail.com', '_blank')}
              >
                <Envelope size={20} className="mr-2" />
                Send Email
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 btn-secondary"
                onClick={() => window.open('https://linkedin.com/in/rajatjain-cs/', '_blank')}
              >
                <LinkedinLogo size={20} className="mr-2" />
                Connect on LinkedIn
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}