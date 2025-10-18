import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Database, BarChart3, FileSpreadsheet, PieChart, LineChart, Brain, GitBranch } from "lucide-react";

const skillsData = [
  {
    name: "Python",
    icon: Code2,
    description: "Data cleaning, visualization, and automation using pandas, numpy, and matplotlib",
  },
  {
    name: "SQL",
    icon: Database,
    description: "Complex queries, joins, aggregations, and database optimization",
  },
  {
    name: "Power BI",
    icon: BarChart3,
    description: "Interactive dashboards and business intelligence reporting",
  },
  {
    name: "Tableau",
    icon: PieChart,
    description: "Advanced data visualization and storytelling with data",
  },
  {
    name: "Excel",
    icon: FileSpreadsheet,
    description: "Advanced formulas, pivot tables, VBA, and financial modeling",
  },
  {
    name: "Statistics",
    icon: Brain,
    description: "Hypothesis testing, regression analysis, and predictive modeling",
  },
  {
    name: "Data Visualization",
    icon: LineChart,
    description: "Creating compelling visual narratives from complex datasets",
  },
  {
    name: "Version Control",
    icon: GitBranch,
    description: "Git and GitHub for collaborative data projects",
  },
];

export const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-300 overflow-hidden"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <motion.div
                    className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <skill.icon className="w-7 h-7 text-primary" />
                  </motion.div>

                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>

                  <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto overflow-hidden">
                    {skill.description}
                  </p>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
