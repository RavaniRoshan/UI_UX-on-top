import { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useRef } from "react";

interface LandingProps {
  onNavigate: (page: string) => void;
}

export function Landing({ onNavigate }: LandingProps) {
  const { scrollYProgress } = useScroll();
  const skillsRef = useRef(null);
  const processRef = useRef(null);
  const skillsInView = useInView(skillsRef, { once: true });
  const processInView = useInView(processRef, { once: true });

  // Animated geometric shapes for hero
  const FloatingShape = ({
    delay = 0,
    duration = 20,
    size = 40,
    opacity = 0.1,
  }) => (
    <motion.div
      className="absolute bg-accent-gradient rounded-full blur-sm"
      style={{ width: size, height: size }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, opacity, opacity, 0],
        scale: [0, 1, 1, 0],
        rotate: [0, 180, 360],
        x: [-20, 20, -20],
        y: [-20, 20, -20],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );

  const skills = [
    { name: "Design Strategy", level: 95 },
    { name: "Visual Design", level: 90 },
    { name: "Prototyping", level: 85 },
    { name: "Design Systems", level: 92 },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Research",
      description:
        "Deep dive into user needs and business goals",
      icon: "🔍",
    },
    {
      step: "02",
      title: "Design",
      description:
        "Craft solutions that balance form and function",
      icon: "✏️",
    },
    {
      step: "03",
      title: "Prototype",
      description:
        "Build interactive experiences for validation",
      icon: "🛠️",
    },
    {
      step: "04",
      title: "Iterate",
      description: "Refine based on testing and feedback",
      icon: "🔄",
    },
  ];

  const featuredProjects = [
    {
      title: "FinTech Mobile App",
      type: "Mobile Design",
      metric: "40% increase in user engagement",
      description:
        "Complete redesign focusing on user onboarding and core financial features",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      gradient: "from-primary to-success",
    },
    {
      title: "B2B Dashboard",
      type: "Data Visualization",
      metric: "60% reduction in support tickets",
      description:
        "Intuitive analytics platform for complex business intelligence",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      gradient: "from-warning to-primary",
    },
    {
      title: "Design System",
      type: "System Design",
      metric: "3x faster development",
      description:
        "Comprehensive component library and design guidelines",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop",
      gradient: "from-success to-primary",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Above-the-Fold Hero Section */}
      <section className="relative overflow-hidden bg-hero-gradient min-h-screen flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <FloatingShape
            delay={0}
            size={60}
            opacity={0.15}
            duration={25}
          />
          <FloatingShape
            delay={5}
            size={40}
            opacity={0.1}
            duration={30}
          />
          <FloatingShape
            delay={10}
            size={80}
            opacity={0.08}
            duration={35}
          />
          <FloatingShape
            delay={15}
            size={50}
            opacity={0.12}
            duration={28}
          />
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-semibold tracking-wide">
                  ✨ SENIOR UI/UX DESIGNER
                </span>
              </motion.div>

              <motion.h1
                className="text-hero text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                I craft digital experiences that{" "}
                <span className="text-gradient bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  users love
                </span>{" "}
                and businesses need
              </motion.h1>

              <motion.p
                className="text-xl text-white/80 mb-12 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Senior UI/UX Designer specializing in systematic
                design and user-centered solutions. I turn
                complex problems into elegant, scalable
                experiences.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => onNavigate("work")}
                    size="lg"
                    className="bg-white text-midnight-blue hover:bg-white/90 px-10 py-4 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    View My Work
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 4, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                    >
                      →
                    </motion.span>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    onClick={() => onNavigate("contact")}
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-10 py-4 text-base font-semibold backdrop-blur-sm"
                  >
                    Let's Connect
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="aspect-square bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=faces"
                  alt="Alex Chen - UX Designer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Enhanced floating accent elements */}
              <motion.div
                className="absolute -top-8 -right-8 w-32 h-32 bg-accent-gradient rounded-3xl opacity-60 blur-lg"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-24 h-24 bg-success/20 rounded-full blur-md"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Work Section with Enhanced Cards */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-display mb-6">Featured Work</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A selection of projects showcasing systematic
            thinking and measurable impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="group cursor-pointer"
              onClick={() => onNavigate("work")}
            >
              <div className="bg-card rounded-3xl overflow-hidden border border-border shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                  ></div>

                  {/* Project Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-midnight-blue text-xs font-semibold rounded-full">
                      {project.type}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Key Metric */}
                  <div className="mb-4">
                    <span className="text-primary font-semibold text-lg">
                      {project.metric}
                    </span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Hover Arrow */}
                  <motion.div
                    className="flex items-center mt-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    <span className="text-sm font-semibold">
                      View Case Study
                    </span>
                    <span className="ml-2">→</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Showcase */}
      <section
        ref={skillsRef}
        className="max-w-7xl mx-auto px-6 py-32 border-t border-border"
      >
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-display mb-6">Core Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Years of experience refined into systematic design
            capabilities.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="mb-12 last:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={skillsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">
                  {skill.name}
                </h3>
                <span className="text-muted-foreground font-medium">
                  {skill.level}%
                </span>
              </div>

              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-accent-gradient rounded-full"
                  initial={{ width: "0%" }}
                  animate={
                    skillsInView
                      ? { width: `${skill.level}%` }
                      : {}
                  }
                  transition={{
                    duration: 1.5,
                    delay: index * 0.1 + 0.3,
                    ease: "easeOut",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Preview */}
      <section
        ref={processRef}
        className="max-w-7xl mx-auto px-6 py-32 border-t border-border"
      >
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-display mb-6">My Process</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A systematic approach to solving complex design
            challenges.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={
                processInView ? { opacity: 1, y: 0 } : {}
              }
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div
                className="relative mb-8"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-20 h-20 mx-auto bg-subtle-gradient border-2 border-primary/20 rounded-full flex items-center justify-center text-3xl mb-4 shadow-lg">
                  {step.icon}
                </div>

                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                  {step.step}
                </div>

                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <motion.div
                    className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-primary/10"
                    initial={{ scaleX: 0 }}
                    animate={processInView ? { scaleX: 1 } : {}}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.2 + 0.5,
                    }}
                    style={{ transformOrigin: "left" }}
                  />
                )}
              </motion.div>

              <h3 className="text-xl font-semibold mb-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={processInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Button
            variant="outline"
            onClick={() => onNavigate("process")}
            size="lg"
            className="px-10 py-4 text-base font-semibold"
          >
            Learn More About My Process
          </Button>
        </motion.div>
      </section>

      {/* Call to Action Section */}
      <section className="max-w-7xl mx-auto px-6 py-32 border-t border-border">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-display mb-6">
              Ready to create something
              <span className="text-gradient">
                {" "}
                extraordinary?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              I'm currently exploring new opportunities with
              forward-thinking companies who value systematic
              design and measurable results.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => onNavigate("contact")}
                  size="lg"
                  className="px-10 py-4 text-base font-semibold shadow-lg hover:shadow-xl transition-shadow"
                >
                  Start a Conversation
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  onClick={() => onNavigate("about")}
                  size="lg"
                  className="px-10 py-4 text-base font-semibold"
                >
                  Learn My Story
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}