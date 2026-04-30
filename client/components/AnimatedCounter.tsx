import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  label: string;
  suffix?: string;
}

export default function AnimatedCounter({
  end,
  duration = 2,
  label,
  suffix = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);

        let startTime: number;
        let animationId: number;

        const animate = (currentTime: number) => {
          if (!startTime) startTime = currentTime;
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / (duration * 1000), 1);

          setCount(Math.floor(end * progress));

          if (progress < 1) {
            animationId = requestAnimationFrame(animate);
          }
        };

        animationId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationId);
      }
    }, { threshold: 0.3 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [end, duration, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-4xl font-bold font-saira mb-2">
        {count}
        {suffix}
      </div>
      <p className="font-nunito">{label}</p>
    </motion.div>
  );
}
