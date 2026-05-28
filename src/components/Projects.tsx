import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { projects } from "@/data/portfolio";

import projectFraud from "/fraud_detection.png";
import projectLakehouse from "/cloud_lakehouse.png";
import projectSentiment from "/sentiment_analytics.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projectImages: { [key: string]: string } = {
  "project-fraud": projectFraud,
  "project-lakehouse": projectLakehouse,
  "project-sentiment": projectSentiment,
};

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-10 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-center mb-16">
            Featured <span className="text-gradient-gold">Projects</span>
          </h2>

          <div className="max-w-6xl mx-auto">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-12"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.2, type: "tween", ease: "easeInOut", duration: 0.5 }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 40px rgba(255, 215, 0, 0.4)",
                      transition: { type: "tween", ease: "easeInOut", duration: 0.3 },
                    }}
                    className="relative flex flex-col h-full group"
                  >
                    {/* Backlight glow */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/20 via-primary/10 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl z-0" />

                    {/* Project Card */}
                    <div className="glass relative z-10 rounded-xl overflow-hidden flex flex-col h-full hover-lift">
                      {/* Project Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={projectImages[project.image]}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                      </div>

                      {/* Project Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-heading font-bold mb-3">
                          {project.title}
                        </h3>

                        <p className="text-muted-foreground text-sm mb-4 flex-grow">
                          {project.description}
                        </p>

                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-accent mb-2">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-1">
                            {project.achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="text-xs text-muted-foreground flex items-start gap-2"
                              >
                                <span className="text-accent mt-0.5">▸</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-auto">
                          {project.technologies.slice(0, 4).map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                              +{project.technologies.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

