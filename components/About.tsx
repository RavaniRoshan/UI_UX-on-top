import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export function About({ onNavigate }: AboutProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-4xl">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
              The Story
            </span>
          </div>
          <h1 className="text-hero mb-8 leading-tight">
            Building products that matter, 
            <span className="text-muted-foreground"> one system at a time.</span>
          </h1>
        </div>
      </section>

      {/* Story Content */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-border">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-8">
            <p className="text-xl leading-relaxed text-foreground">
              My journey into design started with a simple question: "Why is this so hard to use?" 
              As a psychology major turned designer, I've always been fascinated by the intersection 
              of human behavior and technology.
            </p>
            
            <p className="text-xl leading-relaxed text-muted-foreground">
              Over the past 8 years, I've had the privilege of working with three high-growth startups, 
              helping them scale from Series A through IPO. Each experience taught me something different 
              about systematic thinking, team leadership, and the power of design systems.
            </p>
            
            <p className="text-xl leading-relaxed text-muted-foreground">
              What drives me is the challenge of turning complex, messy problems into elegant, 
              intuitive solutions. I believe great design isn't just about making things look good—it's 
              about creating systems that empower teams and delight users at scale.
            </p>
            
            <div className="pt-8">
              <Button 
                onClick={() => onNavigate('work')}
                size="lg"
                className="px-8 py-4 text-base font-semibold"
              >
                See My Work
              </Button>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="relative">
              <div className="aspect-[3/4] bg-muted rounded-3xl overflow-hidden border border-border">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&h=700&fit=crop&crop=faces"
                  alt="Alex Chen working"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Accent elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent-gradient rounded-2xl opacity-60 blur-sm"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-border">
        <div className="mb-16">
          <h2 className="text-display mb-6">Experience</h2>
          <p className="text-xl text-muted-foreground">
            A timeline of growth, learning, and impact.
          </p>
        </div>
        
        <div className="space-y-16">
          {[
            {
              period: "2021 - Present",
              role: "Senior Product Designer",
              company: "TechFlow (Series B)",
              description: "Leading design for core product areas. Built comprehensive design system that reduced development time by 40%. Managing a team of 3 designers.",
              achievements: ["Increased user retention by 35%", "Shipped 15+ major features", "Established design ops process"]
            },
            {
              period: "2019 - 2021",
              role: "Product Designer",
              company: "DataSync (Series A → B)",
              description: "First design hire. Created entire design system from scratch. Worked closely with engineering to establish design-dev workflows.",
              achievements: ["Reduced support tickets by 60%", "Launched mobile app", "Grew design team from 1 to 4"]
            },
            {
              period: "2017 - 2019",
              role: "UX Designer",
              company: "StartupCo (Seed → A)",
              description: "Joined as employee #12. Wore many hats including user research, product strategy, and visual design. Helped secure Series A funding.",
              achievements: ["0 → 10k users", "Launched core platform", "Conducted 100+ user interviews"]
            }
          ].map((job, index) => (
            <div key={index} className="grid md:grid-cols-4 gap-8">
              <div className="md:text-right">
                <div className="inline-flex px-4 py-2 bg-primary/10 text-primary rounded-xl text-sm font-semibold">
                  {job.period}
                </div>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-2xl font-semibold mb-2">{job.role}</h3>
                <div className="text-xl text-muted-foreground mb-6">{job.company}</div>
                <p className="text-lg mb-6 leading-relaxed text-muted-foreground">{job.description}</p>
                <ul className="space-y-3">
                  {job.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills & Values */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-border">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h3 className="text-4xl font-semibold mb-8">Core Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Design Systems",
                "User Research",
                "Product Strategy",
                "Team Leadership",
                "Information Architecture",
                "Interaction Design",
                "Design Operations",
                "Cross-functional Collaboration"
              ].map((skill, index) => (
                <div key={index} className="py-4 px-6 bg-subtle-gradient border border-border rounded-xl text-center font-medium">
                  {skill}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-4xl font-semibold mb-8">Design Philosophy</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <strong className="text-lg">Systems Thinking:</strong>
                  <p className="text-muted-foreground mt-1">Every design decision should scale and serve the larger ecosystem.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <strong className="text-lg">Data-Informed:</strong>
                  <p className="text-muted-foreground mt-1">Combine quantitative insights with qualitative understanding.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <strong className="text-lg">Collaborative:</strong>
                  <p className="text-muted-foreground mt-1">The best solutions emerge from diverse perspectives working together.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}