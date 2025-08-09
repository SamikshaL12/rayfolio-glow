import TextType from '../components/TextType';
import LightRays from '../components/LightRays';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Index = () => {
  const skills = [
    'Python', 'R', 'SQL', 'Machine Learning', 'Deep Learning', 'TensorFlow', 
    'PyTorch', 'Pandas', 'NumPy', 'Scikit-learn', 'Tableau', 'Power BI',
    'Statistics', 'Data Visualization', 'Big Data', 'AWS', 'Docker'
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
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-foreground">
              <TextType 
                text={["Data Scientist", "ML Engineer", "Analytics Expert"]}
                typingSpeed={75}
                pauseDuration={2000}
                showCursor={true}
                cursorCharacter="|"
                className="text-primary animate-glow"
              />
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transforming complex data into actionable insights through advanced analytics and machine learning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              View Projects
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
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
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-sm py-2 px-4 bg-secondary/50 border border-primary/20 hover:border-primary/50 transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
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
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-foreground">Let's Connect</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Interested in collaborating or discussing data science opportunities?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Get In Touch
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
            LinkedIn Profile
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
