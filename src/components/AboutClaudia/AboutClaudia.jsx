import React from 'react';
import { motion } from 'framer-motion';

const AboutClaudia = () => {
  const ClaudiaEducation = [
    {
      grado: "Master in Law",
      universidad: "Universidad Nacional Autonoma de Honduras",
      fecha: "2000-2002",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quas optio cupiditate in, harum aspernatur mollitia voluptatem quam? Exercitationem rem quod possimus dolores alias molestias molestiae voluptatem ab ipsum quam!",
    },
    {
      grado: "Licenciatura en Derecho",
      universidad: "Universidad Nacional Autonoma de Honduras",
      fecha: "2002-2004",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quas optio cupiditate in, harum aspernatur mollitia voluptatem quam? Exercitationem rem quod possimus dolores alias molestias molestiae voluptatem ab ipsum quam!",
    },
  ];

  return (
    <motion.div
      className="bg-[#5A5243] py-14 text-white px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.h1
          className="text-3xl lg:text-5xl font-bold text-center mb-8"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Claudia Francisca Paz South
        </motion.h1>

        {/* Photo Section */}
        <div className="flex justify-center mb-8">
          <motion.button
            className="border-8 border-[#B69D74] w-60 h-60 lg:w-80 lg:h-80 rounded-2xl"
            whileInView={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            {/* Replace with an actual image if available */}
            foto de mama
          </motion.button>
        </div>

        {/* Description */}
        <motion.div
          className="mx-auto mb-12"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <p className="text-md bg-[#333] rounded-lg p-6 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quas
            optio cupiditate in, harum aspernatur mollitia voluptatem quam?
            Exercitationem rem quod possimus dolores alias molestias molestiae
            voluptatem ab ipsum quam!
          </p>
        </motion.div>

        {/* Education Section Title */}
        <motion.h2
          className="text-3xl lg:text-5xl font-bold text-center mb-8"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Education
        </motion.h2>

        {/* Education Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {ClaudiaEducation.map((education, index) => (
            <motion.div
              key={index}
              className="bg-[#333] rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 + index * 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl lg:text-4xl font-bold mb-2">
                {education.grado}
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
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AboutClaudia;
