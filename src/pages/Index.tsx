import TextType from '../components/TextType';
import LightRays from '../components/LightRays';
import AnimatedContent from '../components/AnimatedContent';
import ChatBot from '../components/ChatBot';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Github, Linkedin, Instagram } from 'lucide-react';
import Dock from '../components/Dock';
import { VscHome, VscPerson, VscBriefcase, VscMortarBoard, VscMail, VscRobot } from 'react-icons/vsc';
import { useState } from 'react';

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const skills = [
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'R', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg' },
    { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
    { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
    { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
    { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' }
  ];

  const projects = [
    {
      title: "Predictive Analytics Dashboard",
      description: "Built a comprehensive ML pipeline for customer churn prediction with 94% accuracy",
      tech: ["Python", "Scikit-learn", "Streamlit", "PostgreSQL"]
    },
    {
      title: "Real-time Data Processing",
      description: "Designed streaming data architecture processing 1M+ events per hour",
      tech: ["Apache Kafka", "Spark", "AWS", "Python"]
    },
    {
      title: "Computer Vision Pipeline",
      description: "Developed automated image classification system for medical diagnostics",
      tech: ["TensorFlow", "OpenCV", "Docker", "Flask"]
    }
  ];

  const experiences = [
    {
      company: "TechCorp Analytics",
      position: "Senior Data Scientist",
      period: "2022 - Present",
      logo: "https://via.placeholder.com/80x80/00ffff/000000?text=TC",
      description: "Leading ML initiatives and data strategy for enterprise clients",
      projects: [
        "Developed customer segmentation models increasing revenue by 23%",
        "Built automated anomaly detection system for fraud prevention",
        "Led team of 4 data scientists in developing recommendation engine"
      ]
    },
    {
      company: "DataFlow Solutions",
      position: "Data Scientist",
      period: "2020 - 2022",
      logo: "https://via.placeholder.com/80x80/00ffff/000000?text=DF",
      description: "Specialized in predictive modeling and business intelligence",
      projects: [
        "Created demand forecasting models with 89% accuracy",
        "Implemented A/B testing framework for product optimization",
        "Developed real-time analytics dashboard for C-suite executives"
      ]
    },
    {
      company: "AI Innovations Lab",
      position: "Junior Data Scientist",
      period: "2019 - 2020",
      logo: "https://via.placeholder.com/80x80/00ffff/000000?text=AI",
      description: "Research and development in machine learning applications",
      projects: [
        "Published 3 research papers on deep learning applications",
        "Developed computer vision models for medical imaging",
        "Contributed to open-source ML libraries"
      ]
    }
  ];

  const education = [
    {
      degree: "Master of Science in Data Science",
      school: "Stanford University",
      year: "2019",
      description: "Specialized in Machine Learning and Statistical Analysis"
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "UC Berkeley",
      year: "2017",
      description: "Focus on Algorithms and Data Structures"
    }
  ];

  const certifications = [
    "AWS Certified Machine Learning Specialist",
    "Google Cloud Professional Data Engineer",
    "TensorFlow Developer Certificate",
    "Tableau Desktop Specialist"
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
          <LightRays
            raysOrigin="top-center"
            raysColor="#00ffff"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="animate-float">
            <div className="mb-4">
              <h2 className="text-2xl md:text-3xl font-light text-muted-foreground mb-2">Hello, I'm</h2>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 text-foreground">Alex Rodriguez</h1>
            </div>
            <h3 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              <TextType 
                text={["Data Scientist", "ML Engineer", "Analytics Expert"]}
                typingSpeed={75}
                pauseDuration={2000}
                showCursor={true}
                cursorCharacter="|"
                className="text-primary animate-glow"
              />
            </h3>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transforming complex data into actionable insights through advanced analytics and machine learning
          </p>
          <div className="flex justify-center">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 max-w-6xl mx-auto">
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          duration={1.2}
          ease="bounce.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.3}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I'm a passionate data scientist with 5+ years of experience in extracting meaningful insights 
              from complex datasets. I specialize in machine learning, statistical analysis, and building 
              scalable data solutions that drive business decisions.
            </p>
          </div>

          {/* Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-foreground">Technical Skills</h3>
            <TooltipProvider>
              <div className="flex flex-wrap gap-4 justify-center">
                {skills.map((skill, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <div className="group cursor-pointer p-3 bg-secondary/50 border border-primary/20 hover:border-primary/50 transition-all duration-300 rounded-lg hover:scale-110">
                        <img 
                          src={skill.logo} 
                          alt={skill.name}
                          className="w-8 h-8 filter brightness-0 invert group-hover:filter-none transition-all duration-300"
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{skill.name}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>
          </div>
        </AnimatedContent>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 max-w-6xl mx-auto">
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={true}
          duration={1.2}
          ease="bounce.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.1}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Experience</h2>
            <p className="text-lg text-muted-foreground">
              My professional journey in data science and analytics
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {experiences.map((exp, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card/50 border-border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-4 w-full">
                    <img src={exp.logo} alt={`${exp.company} logo`} className="w-12 h-12 rounded-lg" />
                    <div className="text-left">
                      <h3 className="text-xl font-semibold text-foreground">{exp.position}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-2">
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Key Projects & Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.projects.map((project, projectIndex) => (
                        <li key={projectIndex} className="text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          {project}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedContent>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          duration={1.2}
          ease="bounce.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.2}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">
              A selection of my recent work in data science and machine learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-card/50 border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs border-primary/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedContent>
      </section>

      {/* Education & Certification Section */}
      <section id="education" className="py-20 px-4 max-w-6xl mx-auto">
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={false}
          duration={1.2}
          ease="bounce.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.4}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Education & Certifications</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-foreground">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="bg-card/50 border-border">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold text-foreground mb-2">{edu.degree}</h4>
                      <p className="text-primary font-medium mb-1">{edu.school}</p>
                      <p className="text-sm text-muted-foreground mb-3">{edu.year}</p>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-foreground">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="bg-card/50 border-border">
                    <CardContent className="p-4">
                      <p className="text-foreground font-medium">{cert}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </AnimatedContent>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 max-w-4xl mx-auto text-center">
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={true}
          duration={1.2}
          ease="bounce.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.5}
        >
          <h2 className="text-4xl font-bold mb-8 text-foreground">Let's Connect</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Interested in collaborating or discussing data science opportunities?
          </p>
          <div className="flex gap-8 justify-center">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="p-4 bg-card/50 border border-border rounded-lg hover:border-primary/50 transition-colors">
              <Github className="w-8 h-8 text-foreground hover:text-primary transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="p-4 bg-card/50 border border-border rounded-lg hover:border-primary/50 transition-colors">
              <Linkedin className="w-8 h-8 text-foreground hover:text-primary transition-colors" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
               className="p-4 bg-card/50 border border-border rounded-lg hover:border-primary/50 transition-colors">
              <Instagram className="w-8 h-8 text-foreground hover:text-primary transition-colors" />
            </a>
          </div>
        </AnimatedContent>
      </section>

      {/* Dock Navigation */}
      <Dock 
        items={[
          { icon: <VscHome size={20} />, label: 'Home', onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
          { icon: <VscPerson size={20} />, label: 'About', onClick: () => scrollToSection('about') },
          { icon: <VscBriefcase size={20} />, label: 'Experience', onClick: () => scrollToSection('experience') },
          { icon: <VscMortarBoard size={20} />, label: 'Education', onClick: () => scrollToSection('education') },
          { icon: <VscMail size={20} />, label: 'Contact', onClick: () => scrollToSection('contact') },
          { icon: <VscRobot size={20} />, label: 'Chatbot', onClick: () => setIsChatOpen(true) },
        ]}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />

      {/* ChatBot */}
      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      {/* Bottom padding for fixed dock */}
      <div className="h-20"></div>
    </div>
  );
};

export default Index;
