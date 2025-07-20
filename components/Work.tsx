import { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface WorkProps {
  onNavigate: (page: string) => void;
}

export function Work({ onNavigate }: WorkProps) {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Mobile App Redesign",
      subtitle: "Consumer Fintech App",
      overview: "Led the complete redesign of a personal finance app, focusing on improving user engagement and reducing churn.",
      challenge: "Users were abandoning the app after initial setup, with only 23% returning after the first week.",
      solution: "Implemented progressive disclosure, gamification elements, and a simplified onboarding flow.",
      impact: {
        engagement: "+40%",
        retention: "+65%",
        support: "-45%"
      },
      timeline: "3 months",
      team: "3 designers, 4 developers, 1 PM",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      tags: ["Mobile Design", "User Research", "Prototyping"],
      gradient: "from-primary to-success",
      details: [
        "Conducted 15+ user interviews to understand pain points",
        "Created comprehensive user journey maps",
        "Developed high-fidelity prototypes with micro-interactions",
        "Collaborated with engineering on implementation strategy",
        "A/B tested key flows with 5,000+ users"
      ]
    },
    {
      id: 2,
      title: "SaaS Dashboard Redesign",
      subtitle: "B2B Analytics Platform",
      overview: "Redesigned the core dashboard for a B2B analytics platform to improve data discovery and reduce time-to-insight.",
      challenge: "Users spent 40+ minutes trying to find relevant data insights, leading to high support ticket volume.",
      solution: "Created an intelligent dashboard with customizable widgets, smart filtering, and contextual help.",
      impact: {
        efficiency: "+70%",
        support: "-60%",
        satisfaction: "+55%"
      },
      timeline: "4 months",
      team: "2 designers, 6 developers, 1 PM, 1 Data Analyst",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tags: ["Dashboard Design", "Data Visualization", "Information Architecture"],
      gradient: "from-warning to-primary",
      details: [
        "Analyzed user behavior data from 10,000+ sessions",
        "Conducted task analysis with 20 power users",
        "Designed modular component system for flexibility",
        "Created comprehensive style guide for data visualization",
        "Implemented progressive disclosure for complex features"
      ]
    },
    {
      id: 3,
      title: "Design System Creation",
      subtitle: "Enterprise Design System",
      overview: "Built a comprehensive design system from scratch to unify the experience across 12 different product areas.",
      challenge: "Inconsistent UI patterns across products led to confused users and slow development cycles.",
      solution: "Created 'Unify'—a design system with 50+ components, clear guidelines, and developer-friendly documentation.",
      impact: {
        velocity: "+3x",
        consistency: "+90%",
        bugs: "-50%"
      },
      timeline: "6 months",
      team: "4 designers, 3 developers, 1 PM",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop",
      tags: ["Design Systems", "Component Library", "Documentation"],
      gradient: "from-success to-primary",
      details: [
        "Audited existing patterns across 12 product areas",
        "Created token-based design system with 8 color palettes",
        "Built Storybook documentation with live code examples",
        "Established governance process for system evolution",
        "Trained 15+ team members on system adoption"
      ]
    }
  ];

  const ProjectCard = ({ project, isExpanded }: { project: typeof projects[0], isExpanded: boolean }) => (
    <div className="border border-border rounded-3xl overflow-hidden bg-card shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="relative aspect-[16/9] bg-muted overflow-hidden">
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>
      </div>
      
      <div className="p-10">
        <div className="flex flex-wrap gap-3 mb-6">
          {project.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-0">
              {tag}
            </Badge>
          ))}
        </div>
        
        <h3 className="text-3xl font-semibold mb-3">{project.title}</h3>
        <p className="text-xl text-muted-foreground mb-6">{project.subtitle}</p>
        <p className="text-lg leading-relaxed mb-8 text-muted-foreground">{project.overview}</p>
        
        {isExpanded && (
          <div className="space-y-8 border-t border-border pt-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Challenge</h4>
              <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4">Solution</h4>
              <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4">Process & Deliverables</h4>
              <ul className="space-y-3">
                {project.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-6">
              {Object.entries(project.impact).map(([key, value], index) => (
                <div key={index} className="text-center p-6 bg-subtle-gradient border border-border rounded-2xl">
                  <div className="text-3xl font-bold text-primary mb-2">{value}</div>
                  <div className="text-sm font-medium text-muted-foreground capitalize">{key}</div>
                </div>
              ))}
            </div>
            
            <div className="grid sm:grid-cols-2 gap-8 pt-6 border-t border-border">
              <div>
                <h5 className="text-lg font-semibold mb-2">Timeline</h5>
                <p className="text-muted-foreground">{project.timeline}</p>
              </div>
              <div>
                <h5 className="text-lg font-semibold mb-2">Team</h5>
                <p className="text-muted-foreground">{project.team}</p>
              </div>
            </div>
          </div>
        )}
        
        <Button
          onClick={() => setSelectedProject(isExpanded ? null : project.id)}
          variant={isExpanded ? "outline" : "default"}
          size="lg"
          className="mt-8 w-full py-4 text-base font-semibold"
        >
          {isExpanded ? "Show Less" : "View Case Study"}
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-4xl">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
              Selected Work
            </span>
          </div>
          <h1 className="text-hero mb-8 leading-tight">
            Case studies that demonstrate
            <span className="text-muted-foreground"> systematic thinking.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Each project showcases a different aspect of my approach: research-driven design, 
            systematic problem-solving, and measurable impact.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-border">
        <div className="space-y-16">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isExpanded={selectedProject === project.id}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-border">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-display mb-6">Interested in working together?</h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            I'm currently exploring new opportunities to help growing startups 
            scale their design capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              onClick={() => onNavigate('contact')}
              size="lg"
              className="px-8 py-4 text-base font-semibold"
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline"
              onClick={() => onNavigate('process')}
              size="lg"
              className="px-8 py-4 text-base font-semibold"
            >
              Learn About My Process
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}