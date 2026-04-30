import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  const triangleVariants = {
    initial: { opacity: 0, y: 100 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
    exit: {
      opacity: 0,
      y: -100,
      transition: { duration: 0.5 },
    },
  };

  const floatingVariants = {
    animate: (i: number) => ({
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 3 + i * 0.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
  };

  const triangles = [
    { id: 1, color: "#1087c9", x: "10%", delay: 0 },
    { id: 2, color: "#2e2c76", x: "25%", delay: 0.15 },
    { id: 3, color: "#31bbbd", x: "40%", delay: 0.3 },
    { id: 4, color: "#1ab182", x: "55%", delay: 0.45 },
    { id: 5, color: "#d02f85", x: "70%", delay: 0.6 },
  ];

  return (
    <motion.div
      className="fixed inset-0 bg-white z-50 flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-white"></div>

      {/* Logo/Text Animation */}
      <motion.div
        className="absolute top-1/3 left-0 right-0 text-center z-20 px-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold font-saira text-vm-pink mb-2">Alphamovil</h1>
        <p className="text-gray-600 font-nunito text-sm md:text-base">Building Digital Solutions</p>
      </motion.div>

      {/* Animated Triangles Container */}
      <motion.div
        className="absolute bottom-1/4 w-full flex justify-center items-end gap-4 md:gap-8 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {triangles.map((triangle, i) => (
          <motion.div
            key={triangle.id}
            className="relative"
            custom={i}
            variants={floatingVariants}
            animate="animate"
          >
            <motion.div
              className="w-10 h-10 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-lg"
              style={{ backgroundColor: triangle.color }}
              custom={i}
              variants={triangleVariants}
              initial="initial"
              animate="animate"
            >
              <i className="fas fa-check text-white text-base md:text-3xl"></i>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Loading Progress Bar */}
      <motion.div
        className="absolute bottom-10 md:bottom-20 w-48 md:w-64 h-1 bg-gray-200 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-vm-blue via-vm-pink to-vm-orange"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        ></motion.div>
      </motion.div>
    </motion.div>
  );
}
