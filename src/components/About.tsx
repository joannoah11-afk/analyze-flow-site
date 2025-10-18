import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Database, BarChart3, Brain, PieChart, TrendingUp } from "lucide-react";

const skills = [
  { name: "Python", level: 85, icon: Code2 },
  { name: "SQL", level: 80, icon: Database },
  { name: "Power BI", level: 75, icon: BarChart3 },
  { name: "Tableau", level: 70, icon: PieChart },
  { name: "Excel", level: 90, icon: TrendingUp },
  { name: "Statistics", level: 75, icon: Brain },
];

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Avatar/Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-64 h-64 mx-auto">
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-20 blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <div className="relative w-full h-full rounded-full border-4 border-primary/30 bg-card flex items-center justify-center overflow-hidden">
                  <div className="text-8xl font-bold text-primary">DA</div>
                </div>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                I'm a <span className="text-primary font-semibold">Data Analyst fresher</span> passionate about transforming raw data into actionable insights. 
                With expertise in Python, SQL, and modern visualization tools, I help organizations make data-driven decisions.
              </p>
              <p className="text-muted-foreground mb-8">
                My analytical approach combines statistical rigor with creative problem-solving to uncover hidden patterns and trends in complex datasets.
              </p>
            </motion.div>
          </div>

          {/* Skills Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Technical Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <skill.icon className="w-6 h-6 text-primary mr-3" />
                    <span className="font-semibold text-foreground">{skill.name}</span>
                  </div>
                  <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.8 + index * 0.1, ease: "easeOut" }}
                    />
                  </div>
                  <div className="text-right mt-2 text-sm text-muted-foreground">{skill.level}%</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
