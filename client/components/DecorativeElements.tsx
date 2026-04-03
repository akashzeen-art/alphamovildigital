import { motion } from "framer-motion";

interface FloatingShapeProps {
  color: string;
  size: string;
  duration: number;
  delay: number;
  x: string;
  y: string;
}

export function FloatingShape({
  color,
  size,
  duration,
  delay,
  x,
  y,
}: FloatingShapeProps) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        backgroundColor: color,
        width: size,
        height: size,
        left: x,
        top: y,
        opacity: 0.1,
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, 20, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    ></motion.div>
  );
}

interface AnimatedBorderProps {
  className?: string;
}

export function AnimatedBorder({ className = "" }: AnimatedBorderProps) {
  return (
    <motion.div
      className={`absolute inset-0 rounded-lg ${className}`}
      style={{
        background: "linear-gradient(45deg, transparent, #d02f85, transparent)",
        backgroundSize: "200% 200%",
      }}
      animate={{
        backgroundPosition: ["0% 0%", "100% 100%"],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      }}
      pointer-events="none"
    ></motion.div>
  );
}

export function AnimatedGradientText({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={`bg-gradient-to-r from-vm-blue via-vm-pink to-vm-orange bg-clip-text text-transparent ${className}`}
      animate={{
        backgroundPosition: ["0%", "100%"],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        backgroundSize: "200% 200%",
      }}
    >
      {children}
    </motion.div>
  );
}
