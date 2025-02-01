import React from 'react'
import image from '../../assets/image.png'
import { motion } from 'framer-motion'

const Home = () => {
    const scaleVariation = {
        initial: { opacity: 0, scale: 2 },
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

    const etiquetas = [
        {
            icono: "https://img.icons8.com/?size=100&id=5MJBEGHfX31Z&format=png&color=b69d74",
            titulo: "+10",
            descripcion: "años de experiencia"
        },
        {
            icono: "https://img.icons8.com/?size=100&id=112583&format=png&color=b69d74",
            titulo: "Resolución",
            descripcion: "de Conflictos"
        },
        {
            icono: "https://img.icons8.com/?size=100&id=tP3OXTLBOXKl&format=png&color=b69d74",
            titulo: "Abogados",
            descripcion: "Altamente Educados"
        },
        {
            icono: "https://img.icons8.com/?size=100&id=33479&format=png&color=b69d74",
            titulo: "Clientes",
            descripcion: "Satisfechos"
        }

    ]

    return (
        <div>
            {/* Hero Section */}
            <div className="bg-[#212121] h-5.6 lg:h-[50rem] pt-[7rem] pb-[12rem] lg:pt-[39rem] relative flex items-center ">
                <div className="grid grid-rows-2 lg:grid-cols-2 items-center w-screen lg:pt-12">

                    {/* Column #1: Text */}
                    <div className="flex flex-col justify-center items-center px-10">
                        <motion.div
                            variants={slideLeftVariation}
                            initial="initial"
                            whileInView="whileInView"
                            exit="exit"
                            viewport={{ once: false, amount: 0.01 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            className = "lg:pt-[6rem]"
                        >
                            <h1 className="text-5xl text-white font-bold pb-2 pr-[10.8rem] ">
                                Bufete Cole South
                            </h1>
                        </motion.div>
                        <motion.div
                            variants={slideLeftVariation}
                            initial="initial"
                            whileInView="whileInView"
                            exit="exit"
                            viewport={{ once: false, amount: 0.01 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                        >
                            <p className="justify-end lg:px-[5.8rem] lg:py-10 text-lg text-white p-2">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quisquam
                                repellat perspiciatis cumque perferendis rem quam quas aliquid praesentium dolore hic
                                consequatur minima, eaque cum recusandae, aperiam esse quod nisi.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, ad cumque beatae odio
                                voluptatum iusto commodi ab laudantium minus temporibus officia molestias impedit omnis culpa
                                earum, rerum quasi debitis consectetur?
                            </p>
                        </motion.div>
                    </div>

                    {/* Column #2: Buttons */}
                    <div>
                        <div className="flex flex-col items-center lg:pt-24">
                            <div className="flex flex-col lg:flex-row gap-20 items-center z-0 text-white">
                                <button className="border-8 border-[#B69D74] w-[10rem] h-[20rem] lg:w-[20rem] lg:h-[30rem] animate-[ybounce_3s_infinite]">
                                    foto de papa
                                </button>
                                <button className="border-8 border-[#B69D74] w-[10rem] h-[20rem] lg:w-[20rem] lg:h-[30rem] animate-[ybounce_3s_infinite]">
                                    foto de mama
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* White section spanning both backgrounds */}
                <div className="absolute left-[12.5rem] lg:left-[23rem] transform -translate-x-[12rem] top-[94%] lg:top-[93%]">
                    <div className="flex flex-row border-[0.45rem] border-[#B69D74] bg-white shadow-lg rounded-2xl w-72 lg:w-[80rem] h-48 lg:h-[7rem]">
                        <div className="grid grid-cols-1 lg:grid-cols-4 lg:px-20 lg:gap-[12rem] justify-center items-center w-full text-center">
                            {
                                etiquetas.map((etiqueta, index) => (
                                    <div key={index} className={`whitespace-nowrap flex flex-row justify-center items-center gap-4 ${index > 0? 'hidden lg:flex' : ''}`}>
                                        <img src={etiqueta.icono} alt="experience"
                                            className="lg:w-16 lg:h-16">
                                        </img>
                                            <div className="flex flex-col justify-start items-start">
                                                <h1 className="text-3xl lg:text-2xl font-extrabold">{etiqueta.titulo}</h1>
                                                <p className="text-md ">{etiqueta.descripcion}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                </div>
            </div>

            {/* Lower White Section with Image and Mission/Vision */}
            <div
                className="relative z-[-1] w-screen lg:h-screen flex flex-col lg:flex-row lg:gap-20 lg:pl-[12rem] items-center pt-[10rem] lg:pt-[6rem]"
                style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                {/* White Overlay */}
                <div className="absolute inset-0 bg-[#5A5243] opacity-[83%] z-0"></div>

                <div className="relative z-10 flex flex-col lg:flex-row lg:gap-20 items-center w-full">
                    {/* Image Section */}
                    <div className="relative">
                        {/* Outer border frame */}
                        <div className="border-[0.8rem] border-[#B69D74] w-[24rem] lg:w-[36rem] h-[28rem] lg:h-[37.5rem] absolute -top-6 -left-10 animate-xbounce z-10"></div>

                        {/* Image container */}
                        <div className="relative z-20 w-full">
                            <img
                                src="/CS.png"
                                alt="imagen"
                                className="w-[23rem] lg:w-[30rem] h-[25rem] lg:h-[34rem] object-contain shadow-lg"
                            />
                        </div>
                    </div>

                        {/* Text container for Mission & Vision */}
                    <div className="max-w-[52rem] pb-16 lg:flex lg:items-center lg:justify-center">
                        <div className="w-screen flex flex-col justify-center items-center mt-10 pt-6 px-10 text-center gap-8">
                            <motion.div
                                variants={slideLeftVariation}
                                initial="initial"
                                whileInView="whileInView"
                                exit="exit"
                                viewport={{ once: false, amount: 0.01 }}
                                transition={{ duration: 1, ease: "easeInOut" }}>
                                <div className="p-6 lg:p-14 bg-[#e0e1dd] bg-opacity-95 rounded-lg">
                                    <h1 className="text-2xl font-bold text-[#333] pt-4">Mission</h1>
                                    <p className="text-lg text-gray-600 mt-4 leading-relaxed">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At tempora unde
                                        voluptas quia facilis consequuntur commodi repellendus aperiam temporibus, cumque
                                        necessitatibus, qui, facere vitae odit a officiis aliquid quam? Incidunt.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={slideRightVariation}
                                initial="initial"
                                whileInView="whileInView"
                                exit="exit"
                                viewport={{ once: false, amount: 0.01 }}
                                transition={{ duration: 1, ease: "easeInOut" }}>
                                <div className="p-6 lg:p-14 bg-[#e0e1dd] bg-opacity-95 rounded-lg">
                                    <h1 className="text-2xl font-bold text-[#333] pt-4">Vision</h1>
                                    <p className="text-lg text-gray-600 mt-4 leading-relaxed">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis consequatur aliquid
                                        molestiae provident suscipit temporibus inventore, fugiat, sequi dolorum iste
                                        repellendus? Sequi rerum quo laborum aut repellendus, officia et veritatis.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
