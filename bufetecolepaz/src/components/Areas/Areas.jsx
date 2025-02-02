import React from 'react';
import {motion} from 'framer-motion';

const Areas = () => {
    const scaleVariation = {
        initial: { opacity: 0, scale: 1.25 },
        whileInView: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0 },
    }

    const slideRightVariation = {
        initial: { opacity: 0, x: 100 },
        whileInView: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
    }

    const slideLeftVariation = {
        initial: { opacity: 0, x: -100 },
        whileInView: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 100 },
    }

    const slideUpVariation = {
        initial: { opacity: 0, y: 100 },
        whileInView: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -100 },
    }

    const morphVariation = {
        initial: { opacity: 0, borderRadius: "100%" },
        whileInView: { opacity: 1, borderRadius: "50%" },
    }

  const areas = [
    {
      name: "Family Law",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      icon: "https://img.icons8.com/?size=100&id=6884&format=png&color=b69d74",
    },
    {
      name: "Criminal Law",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      icon: "https://img.icons8.com/?size=100&id=47442&format=png&color=b69d74",
    },
    {
      name: "Business Law",

      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      icon: "https://img.icons8.com/?size=100&id=yHmk9ruAuVj3&format=png&color=b69d74",
    },
    {
      name: "Immigrant Law",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      icon: "https://img.icons8.com/?size=100&id=3685&format=png&color=b69d74",
    },
  ];

  return (
    <div className="w-screen h-fit bg-[#e0e1dd] pt-12 overflow-hidden py-10">
      {/* Title Section */}
      <div className="flex flex-col h-10 w-screen items-center justify-center">
        <h1 className="text-lg py-4 font-bold text-[#B69D74]">HOW CAN WE HELP YOU?</h1>
        <h1 className="text-4xl font-semibold text-[#333]">Our Legal Practice Areas</h1>
      </div>

      {/* Areas Section */}
      <div className="flex justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-16">
            {areas.map((area, index) => (
                <motion.div
                key={index}
                variants={scaleVariation}
                initial="initial"
                whileInView="whileInView"
                exit="exit"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1, ease: "easeInOut" }}

                >
                    <div
                    className="w-[22rem] h-[20rem] lg:w-[30rem] lg:h-[30rem] pt-8 lg:pt-0 bg-[#212121] hover:bg-[#C4B08F] transition-colors duration-500 rounded-xl flex flex-col items-center justify-center shadow-lg group"
                    >
                    {/* Icon Section */}
                    <div className="relative flex items-center justify-center">
                        {/* Outer Diamond (background effect) */}
                        <div
                        className="absolute p-[2.7rem] lg:p-[2.95rem] bg-gray-600 rotate-45 rounded-lg shadow-lg opacity-30 transition-transform duration-700 group-hover:rotate-[405deg]"
                        style={{ top: '-15px' }}
                        ></div>
                        {/* Inner Diamond */}
                        <div className="bg-[#444] rotate-45 rounded-lg p-6 lg:p-[1.7rem] shadow-md flex items-center justify-center relative z-10 transition-transform duration-700 group-hover:rotate-[405deg]">
                        <img src={area.icon} className = "text-4xl text-[#B69D74] -rotate-45 w-10 h-10"></img>
                        </div>
                    </div>

                    {/* Text Content */}
                    <h1 className="text-white text-2xl font-semibold mb-4 lg:pt-8 mt-8">{area.name}</h1>
                    <p className="text-white text-center px-6 lg:px-20 text-md mb-8 leading-relaxed">
                        {area.description}
                    </p>
                    </div>
                </motion.div>
            ))}
            </div>
      </div>
    </div>
  );
};

export default Areas;
