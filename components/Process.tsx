import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProcessProps {
  onNavigate: (page: string) => void;
}

export function Process({ onNavigate }: ProcessProps) {
  const processSteps = [
    {
      number: "01",
      title: "Research & Discovery",
      description: "Every great solution starts with understanding the problem deeply.",
      details: [
        "Stakeholder interviews to align on goals and constraints",
        "User research to understand needs, behaviors, and pain points",
        "Competitive analysis and market landscape review",
        "Data analysis to identify patterns and opportunities"
      ],
      deliverables: "Research synthesis, personas, journey maps, opportunity areas",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
    },
    {
      number: "02",
      title: "Strategy & Planning",
      description: "Turning insights into actionable design strategy and measurable goals.",
      details: [
        "Define success metrics and key performance indicators",
        "Prioritize features and improvements based on impact/effort",
        "Create design principles specific to the project",
        "Establish project timeline and resource requirements"
      ],
      deliverables: "Design strategy document, project roadmap, success metrics framework",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop"
    },
    {
      number: "03",
      title: "Ideation & Exploration",
      description: "Exploring multiple solutions through rapid iteration and validation.",
      details: [
        "Collaborative workshops with cross-functional teams",
        "Rapid sketching and low-fidelity prototyping",
        "Concept validation through user testing and feedback",
        "Information architecture and user flow design"
      ],
      deliverables: "Concept sketches, user flows, wireframes, validated concepts",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=300&fit=crop"
    },
    {
      number: "04",
      title: "Design & Refinement",
      description: "Crafting polished solutions that balance user needs with business goals.",
      details: [
        "High-fidelity design creation with attention to detail",
        "Interactive prototyping for complex user interactions",
        "Design system integration and component creation",
        "Accessibility review and compliance validation"
      ],
      deliverables: "High-fidelity designs, interactive prototypes, design specifications",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop"
    },
    {
      number: "05",
      title: "Validation & Testing",
      description: "Ensuring solutions work for real users before development begins.",
      details: [
        "Usability testing with target users",
        "A/B testing for key decisions and improvements",
        "Stakeholder review and feedback integration",
        "Technical feasibility validation with engineering"
      ],
      deliverables: "Testing results, design iterations, final specifications",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    },
    {
      number: "06",
      title: "Implementation & Optimization",
      description: "Collaborating closely with development and monitoring post-launch metrics.",
      details: [
        "Developer handoff with detailed specifications",
        "QA review and design implementation validation",
        "Post-launch metrics monitoring and analysis",
        "Iterative improvements based on user feedback and data"
      ],
      deliverables: "Design handoff package, QA checklist, performance analysis",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-4xl">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
              My Process
            </span>
          </div>
          <h1 className="text-hero mb-8 leading-tight">
            A systematic approach to 
            <span className="text-muted-foreground"> solving complex problems.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Every project is unique, but my process remains consistent: research-driven, 
            collaborative, and focused on measurable outcomes.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-border">
        <div className="space-y-20">
          {processSteps.map((step, index) => (
            <div key={index} className="grid lg:grid-cols-5 gap-12 items-start">
              <div className="lg:col-span-2">
                <div className="text-5xl font-bold text-primary/20 mb-6">{step.number}</div>
                <h3 className="text-3xl font-semibold mb-6">{step.title}</h3>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">{step.description}</p>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-4 text-primary">Key Activities</h4>
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">Deliverables</h4>
                  <p className="text-muted-foreground">{step.deliverables}</p>
                </div>
              </div>
              
              <div className="lg:col-span-3">
                <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden border border-border shadow-sm">
                  <ImageWithFallback
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Principles Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-border">
        <div className="mb-16">
          <h2 className="text-display mb-6">Guiding Principles</h2>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            These principles guide every decision I make throughout the design process.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "User-Centered",
              description: "Every decision is validated through user research and real-world testing. I believe in designing with users, not for them."
            },
            {
              title: "Systems Thinking",
              description: "I consider how each design decision impacts the larger ecosystem—from brand consistency to technical constraints."
            },
            {
              title: "Data-Informed",
              description: "I combine quantitative analytics with qualitative insights to make informed design decisions and measure success."
            },
            {
              title: "Collaborative",
              description: "The best solutions emerge from diverse perspectives. I work closely with stakeholders, users, and teammates."
            },
            {
              title: "Iterative",
              description: "Design is never 'done.' I believe in continuous improvement through testing, feedback, and optimization."
            },
            {
              title: "Accessible",
              description: "Good design works for everyone. I ensure solutions are inclusive and accessible from the very beginning."
            }
          ].map((principle, index) => (
            <div key={index} className="p-8 border border-border rounded-2xl bg-subtle-gradient">
              <h3 className="text-xl font-semibold mb-4">{principle.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools & Methods */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-border">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h3 className="text-3xl font-semibold mb-8">Design Tools</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Figma", "Sketch", "Principle", "Framer",
                "Miro", "FigJam", "Notion", "Linear"
              ].map((tool, index) => (
                <div key={index} className="py-4 px-6 bg-subtle-gradient border border-border rounded-xl text-center font-medium">
                  {tool}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-3xl font-semibold mb-8">Research Methods</h3>
            <div className="space-y-4">
              {[
                "User Interviews",
                "Usability Testing", 
                "Card Sorting",
                "A/B Testing",
                "Analytics Review",
                "Competitive Analysis",
                "Journey Mapping",
                "Persona Development"
              ].map((method, index) => (
                <div key={index} className="py-3 px-6 bg-subtle-gradient border border-border rounded-xl font-medium">
                  {method}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-border">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-display mb-6">Ready to see this process in action?</h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Take a look at my case studies to see how this systematic approach 
            delivers measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              onClick={() => onNavigate('work')}
              size="lg"
              className="px-8 py-4 text-base font-semibold"
            >
              View Case Studies
            </Button>
            <Button 
              variant="outline"
              onClick={() => onNavigate('contact')}
              size="lg"
              className="px-8 py-4 text-base font-semibold"
            >
              Let's Discuss Your Project
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}