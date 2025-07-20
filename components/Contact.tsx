import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { toast } from "sonner@2.0.3";

interface ContactProps {
  onNavigate: (page: string) => void;
}

export function Contact({ onNavigate }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for reaching out! I'll get back to you within 24 hours.");
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-4xl">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
              Get In Touch
            </span>
          </div>
          <h1 className="text-hero mb-8 leading-tight">
            Let's build something 
            <span className="text-gradient"> great together.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            I'm currently open to new opportunities with growing startups who value 
            systematic design thinking and strategic impact.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-border">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Form */}
          <div>
            <h2 className="text-4xl font-semibold mb-8">Send me a message</h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-base">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2 h-12 text-base border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-base">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2 h-12 text-base border-border focus:border-primary"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="company" className="text-base">Company</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="mt-2 h-12 text-base border-border focus:border-primary"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-base">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="mt-2 text-base border-border focus:border-primary resize-none"
                  placeholder="Tell me about your project, team, or what you're looking for..."
                />
              </div>
              <Button type="submit" size="lg" className="px-8 py-4 text-base font-semibold">
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-semibold mb-8">Other ways to reach me</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-lg font-medium text-primary mb-2">Email</div>
                  <a 
                    href="mailto:alex@alexchen.design" 
                    className="text-xl hover:text-primary transition-colors"
                  >
                    alex@alexchen.design
                  </a>
                </div>
                <div>
                  <div className="text-lg font-medium text-primary mb-2">LinkedIn</div>
                  <a 
                    href="https://linkedin.com/in/alexchen-design" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xl hover:text-primary transition-colors"
                  >
                    linkedin.com/in/alexchen-design
                  </a>
                </div>
                <div>
                  <div className="text-lg font-medium text-primary mb-2">Location</div>
                  <p className="text-xl">San Francisco, CA</p>
                  <p className="text-muted-foreground">Open to remote work</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-2xl font-semibold mb-6">What I'm looking for</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                  Senior IC role or design leadership position
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                  Series A through Series C startups
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                  Teams that value systematic design thinking
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                  Opportunities to build and scale design systems
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                  Products that make a meaningful impact
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-2xl font-semibold mb-4">Typical response time</h4>
              <p className="text-muted-foreground leading-relaxed">
                I typically respond to all inquiries within 24 hours. For urgent matters, 
                feel free to mention that in your message.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-border">
        <div className="mb-16">
          <h2 className="text-display mb-6">Frequently asked questions</h2>
          <p className="text-xl text-muted-foreground">
            Answers to common questions about working together.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              question: "What's your typical project timeline?",
              answer: "It depends on scope, but most projects range from 2-6 months. I prefer to work iteratively with regular check-ins and deliverables."
            },
            {
              question: "Do you work with agencies or only direct clients?",
              answer: "I work with both! I've collaborated with agencies on complex projects and directly with startups as an embedded team member."
            },
            {
              question: "What's your approach to remote collaboration?",
              answer: "I'm fully remote-first with experience leading distributed design teams. I use tools like Figma, Miro, and Linear for seamless collaboration."
            },
            {
              question: "Do you provide ongoing design support?",
              answer: "Yes! I offer ongoing design partnerships for teams who need consistent strategic design support without a full-time hire."
            },
            {
              question: "What industries do you have experience in?",
              answer: "I've worked primarily in fintech, SaaS, and consumer apps. I'm always excited to learn new domains and bring fresh perspectives."
            },
            {
              question: "Do you work on design systems?",
              answer: "Absolutely! Design systems are one of my specialties. I love helping teams scale their design operations and maintain consistency."
            }
          ].map((faq, index) => (
            <div key={index} className="p-8 border border-border rounded-2xl bg-subtle-gradient">
              <h4 className="text-xl font-semibold mb-4">{faq.question}</h4>
              <p className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Alternative CTA */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-border">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-display mb-6">Not ready to reach out yet?</h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Take a look at my work or learn more about my design process.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              variant="outline"
              onClick={() => onNavigate('work')}
              size="lg"
              className="px-8 py-4 text-base font-semibold"
            >
              View My Work
            </Button>
            <Button 
              variant="outline"
              onClick={() => onNavigate('process')}
              size="lg"
              className="px-8 py-4 text-base font-semibold"
            >
              Learn My Process
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}