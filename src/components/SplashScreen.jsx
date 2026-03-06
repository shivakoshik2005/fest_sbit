import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Wait for fade out animation
    }, 3000); // Show splash for 3 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ 
                scale: [1.2, 1, 1.2],
                x: [0, 50, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
            />
          </div>

          {/* Logo Container */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center"
          >
            {/* CSE Logo - Replace with actual CSE logo URL */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-40 h-40 mb-6"
            >
              <img 
                src="https://i.ibb.co/99tTv0tJ/image.png" 
                alt="CSE Logo" 
                className="w-full h-full object-contain rounded-2xl shadow-2xl"
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-white/80 text-lg font-medium tracking-wider"
            >
              Department of Computer Science & Engineering
            </motion.p>

            {/* Loading Bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 200 }}
              transition={{ delay: 0.5, duration: 2, ease: "easeInOut" }}
              className="h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full mt-8"
            />
          </motion.div>

          {/* Fest Name at Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-12 text-center"
          >
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              AAROHAN 2026
            </h1>
            <p className="text-white/60 text-sm mt-2">SBIT Innovation Centre</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;

