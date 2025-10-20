import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { ExternalLink, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "HR Dashboard",
    description: "Interactive dashboard analyzing sales performance across regions with KPIs, trends, and forecasting.",
    tools: ["Power BI", "Excel", "DAX"],
    icon: BarChart3,
    details: "Built comprehensive sales analytics dashboard featuring real-time KPI tracking, regional performance comparison, and predictive sales forecasting. Implemented custom DAX measures for advanced calculations.",
    link: "/hr_dashboard_1.pbix",
  },
];

export const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative bg-card border border-border rounded-xl overflow-hidden transition-all duration-500 ${
                  expandedProject === index ? "md:col-span-2 lg:col-span-3" : ""
                }`}
              >
                <div className="p-6">
                  {/* Icon and Title */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mr-4">
                        <project.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Expanded Details */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: expandedProject === index ? "auto" : 0,
                      opacity: expandedProject === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-border">
                      <p className="text-foreground mb-4">{project.details}</p>
                      <div className="flex gap-4">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-primary/50 hover:bg-primary/10"
                          asChild
                        >
                          <a href={project.link} download>
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Project
                          </a>
                        </Button>
                      </div>
                    </div>
                  </motion.div>

                  {/* Expand Button */}
                  <Button
                    onClick={() =>
                      setExpandedProject(expandedProject === index ? null : index)
                    }
                    variant="ghost"
                    className="w-full mt-4 text-primary hover:text-primary hover:bg-primary/10"
                  >
                    {expandedProject === index ? "Show Less" : "Learn More"}
                  </Button>
                </div>

                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
