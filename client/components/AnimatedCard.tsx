import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedCard({
  children,
  className = "",
  delay = 0,
}: AnimatedCardProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
      transition={{
        duration: 0.3,
        delay,
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {children}
    </motion.div>
  );
}
