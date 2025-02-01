import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const FloatingWhatsApp = () => {
  const [isHovered, setIsHovered] = useState(false);
  const message = "Presiona el boton para chatear con nosotros!";
  const letters = message.split("");

  const bubbleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: [0, -5, 5, -5, 5, 0],
      transition: {
        duration: 1,
        ease: "easeInOut",
        delay: 0.1,
        when: "beforeChildren",
        delayChildren: 0.5,
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
      transition: { duration: 0.3 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, x: -5 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.1 } },
  };

  const iconWiggle = {
    whileHover: {
      rotate: [0, -10, 10, -10, 10, 0],
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.div
        className="relative flex items-center"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* WhatsApp Button with reduced padding and icon wiggle */}
        <motion.a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 px-4 rounded-full shadow-xl"
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div {...iconWiggle}>
            <FontAwesomeIcon icon={faWhatsapp} className="w-8 h-8" />
          </motion.div>
        </motion.a>

        {/* Bubble with iMessage-style tail and typing effect */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              variants={bubbleVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute right-full mr-3 bottom-0.5"
            >
              <div className="relative inline-block">
                {/* Bubble container with reduced vertical padding */}
                <div className="bg-white text-black w-[13rem] h-[3rem] px-4  rounded-lg shadow-lg">
                  <motion.div className="flex flex-wrap">
                    {letters.map((letter, index) => (
                      <motion.span
                    key={index}
                    variants={letterVariants}
                    className="whitespace-pre"
                      >
                    {letter}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
                {/* Bubble tail (smaller) */}
                <div className="absolute right-[-2.6px] bottom-0.5 w-0 h-0 rotate-180
                                border-t-4 border-t-transparent
                                border-r-4 border-r-white
                                border-b-4 border-b-transparent"></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default FloatingWhatsApp;
