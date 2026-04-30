import { motion } from "framer-motion";

interface MobilePhoneFrameProps {
  section: string;
  color: string;
  icon: string;
}

export default function MobilePhoneFrame({ section, color, icon }: MobilePhoneFrameProps) {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
      },
    },
  };

  const floatVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="flex items-center justify-center h-96"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Phone Frame */}
      <motion.div
        className="relative w-72 h-96 bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl p-3 border-8 border-gray-800"
        variants={floatVariants}
        animate="animate"
      >
        {/* Phone Screen */}
        <div className="absolute inset-3 bg-white rounded-2xl overflow-hidden flex flex-col items-center justify-center">
          {/* Top notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-gray-900 rounded-b-3xl z-10"></div>

          {/* Phone Content */}
          <motion.div
            className="flex flex-col items-center justify-center h-full w-full p-6 text-center"
            variants={contentVariants}
          >
            <motion.div
              className="text-6xl mb-4"
              style={{ color: color }}
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <i className={`fas ${icon}`}></i>
            </motion.div>

            <h3 className="text-lg font-bold font-saira text-gray-900 mb-2">{section}</h3>
            <p className="text-xs text-gray-500 mb-4">Mobile Animation</p>

            {/* Animated dots */}
            <div className="flex gap-2 mt-4">
              {[0, 1, 2].map((idx) => (
                <motion.div
                  key={idx}
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: color }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: idx * 0.2,
                    repeat: Infinity,
                  }}
                ></motion.div>
              ))}
            </div>
          </motion.div>

          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black rounded-full"></div>
        </div>
      </motion.div>
    </motion.div>
  );
}
