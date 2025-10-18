import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, BookOpen, Trophy, Star } from "lucide-react";

const achievements = [
  {
    year: "2024",
    title: "Google Data Analytics Professional Certificate",
    organization: "Coursera",
    icon: Award,
    description: "Completed comprehensive program covering data analysis, visualization, and R programming",
  },
  {
    year: "2024",
    title: "Microsoft Power BI Data Analyst",
    organization: "Microsoft",
    icon: Trophy,
    description: "Certified in Power BI for creating interactive dashboards and business intelligence solutions",
  },
  {
    year: "2023",
    title: "Excel for Business Specialization",
    organization: "Coursera",
    icon: BookOpen,
    description: "Advanced Excel skills including financial modeling, VBA, and data analysis",
  },
  {
    year: "2023",
    title: "SQL for Data Science",
    organization: "UC Davis - Coursera",
    icon: Star,
    description: "Mastered SQL queries, database design, and data manipulation techniques",
  },
];

export const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="achievements" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Achievements & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary opacity-30" />

            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Icon Circle */}
                  <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-16 h-16 rounded-full bg-card border-4 border-primary flex items-center justify-center z-10">
                    <achievement.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 ml-24 md:ml-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <motion.div
                      className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-3">
                        {achievement.year}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-secondary font-medium mb-2">
                        {achievement.organization}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {achievement.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
