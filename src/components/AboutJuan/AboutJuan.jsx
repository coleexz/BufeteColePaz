import React from 'react';
import { motion } from 'framer-motion';

const AboutJuan = () => {
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

  const JuanEducation = [
    {
      maestria: "Master in Law",
      universidad: "Universidad Nacional Autonoma de Honduras",
      fecha: "2000-2002",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quas optio cupiditate in, harum aspernatur mollitia voluptatem quam? Exercitationem rem quod possimus dolores alias molestias molestiae voluptatem ab ipsum quam!",
    },
    {
      maestria: "Master in Economics",
      universidad: "Universidad Nacional Autonoma de Honduras",
      fecha: "2002-2004",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quas optio cupiditate in, harum aspernatur mollitia voluptatem quam? Exercitationem rem quod possimus dolores alias molestias molestiae voluptatem ab ipsum quam!",
    },
    {
      maestria: "Master in Business Administration",
      universidad: "Universidad Nacional Autonoma de Honduras",
      fecha: "2004-2006",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quas optio cupiditate in, harum aspernatur mollitia voluptatem quam? Exercitationem rem quod possimus dolores alias molestias molestiae voluptatem ab ipsum quam!",
    },
    {
      maestria: "Master in Law",
      universidad: "Universidad Nacional Autonoma de Honduras",
      fecha: "2006-2008",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quas optio cupiditate in, harum aspernatur mollitia voluptatem quam? Exercitationem rem quod possimus dolores alias molestias molestiae voluptatem ab ipsum quam!",
    },
  ];

  return (
    <div className="bg-[#212121] py-14 text-white px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl lg:text-5xl font-bold text-center mb-8">
          Juan Carlos Cole Medina
        </h1>

        {/* Photo Section */}
        <div className="flex justify-center mb-8">
          <button className="border-8 border-[#B69D74] w-60 h-60 lg:w-80 lg:h-80 rounded-2xl animate-[ybounce_8s_infinite]">
            {/* Replace with an actual image if available */}
            foto de papa
          </button>
        </div>

        {/* Description */}
        <motion.div
          variants={slideLeftVariation}
          initial="initial"
          whileInView="whileInView"
          exit="exit"
          viewport={{ once: false, amount: 0.01 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className="mx-auto mb-12">
            <p className="text-md bg-[#333] rounded-lg p-6 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quas
                optio cupiditate in, harum aspernatur mollitia voluptatem quam?
                Exercitationem rem quod possimus dolores alias molestias molestiae
                voluptatem ab ipsum quam!
            </p>
            </div>
        </motion.div>

        {/* Education Section Title */}
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-8">
          Education
        </h2>

        {/* Education Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {JuanEducation.map((education, index) => (
            <motion.div
                    key={index}
                    variants={morphVariation}
                    initial="initial"
                    whileInView="whileInView"
                    exit="exit"
                    viewport={{ once: false, amount: 0.01 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                <div
                    key={index}
                    className="bg-[#333] rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                        <h3 className="whitespace-nowrap text-2xl lg:text-3xl font-bold mb-2">
                            {education.maestria}
                        </h3>
                        <p className="text-lg lg:text-xl font-semibold mb-1">
                            {education.universidad}
                        </p>
                        <p className="text-lg lg:text-xl font-semibold mb-3">
                            {education.fecha}
                        </p>
                        <p className="text-md leading-relaxed">
                            {education.descripcion}
                        </p>
                    </div>
                </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutJuan;
