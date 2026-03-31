import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Software Engineer | Building AI-Powered Applications
            </h3>

            <p className="text-muted-foreground">
              I build and ship real-world web applications through projects and hackathons, 
              focusing on performance, scalability, and delivering reliable user experiences.
              I learn fast, iterate quickly, and approach problems with an engineering mindset.

            </p>

            <p className="text-muted-foreground">
            I’m passionate about building elegant solutions to complex problems, 
            continuously learning and applying new technologies to 
            stay at the forefront of the evolving software landscape.

            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/AlfredMtambalika_Software_Engineer_Resume.pdf"
                target="_blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                📄 View Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Building Scalable Applications</h4>
                  <p className="text-muted-foreground">
                    Designing and developing production-ready applications with a focus on 
                    scalability, reliability, and clean architecture.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Performance & System Design</h4>
                  <p className="text-muted-foreground">
                      Optimizing performance and exploring system design concepts, 
                      including efficient data flow, caching strategies, and real-time systems.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI-Powered Applications</h4>
                  <p className="text-muted-foreground">
                      Building intelligent applications that integrate AI to solve real-world 
                      problems and enhance user experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
