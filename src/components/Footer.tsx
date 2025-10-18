import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="relative py-8 px-4 bg-background border-t border-border overflow-hidden">
      {/* Animated Wave */}
      <div className="absolute inset-x-0 bottom-0 h-24 opacity-20">
        <svg
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <motion.path
            d="M0,50 C300,100 900,0 1200,50 L1200,120 L0,120 Z"
            fill="hsl(var(--primary))"
            initial={{ d: "M0,50 C300,100 900,0 1200,50 L1200,120 L0,120 Z" }}
            animate={{
              d: [
                "M0,50 C300,100 900,0 1200,50 L1200,120 L0,120 Z",
                "M0,50 C300,0 900,100 1200,50 L1200,120 L0,120 Z",
                "M0,50 C300,100 900,0 1200,50 L1200,120 L0,120 Z",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Data Analyst Portfolio. Built with passion for data.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Designed to showcase the power of data visualization and analytics
        </p>
      </div>
    </footer>
  );
};
