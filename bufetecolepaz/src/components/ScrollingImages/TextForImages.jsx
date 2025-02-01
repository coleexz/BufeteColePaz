import React from 'react';
import { motion } from 'framer-motion';

const TextForImages = () => {
  return (
    <div className="relative w-screen h-[28rem] flex justify-center items-center bg-cover bg-center text-white"
         style={{ backgroundImage: "url('/your-location-image.jpg')" }}>

      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-[#212121] "></div>

      {/* Text Content */}
      <motion.div
        className="relative text-center px-6 max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Exclusividad, Prestigio y Confianza
        </h1>
        <p className="text-lg md:text-2xl leading-relaxed">
          En nuestro <span className="font-semibold">bufete de notarios en Honduras</span>, ofrecemos servicios legales con excelencia y discreción.
          Ubicados en el exclusivo <span className="font-semibold">Terravista Plaza</span>, un edificio cuya apariencia refleja nuestro compromiso con la calidad, seguridad y la confianza de nuestros clientes.
        </p>
      </motion.div>
    </div>
  );
};

export default TextForImages;
