import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollAnimationSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollAnimationSection({
  children,
  className = "",
  delay = 0,
}: ScrollAnimationSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
}
