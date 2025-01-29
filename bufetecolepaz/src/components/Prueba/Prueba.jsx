import React from 'react'
import { motion }  from 'framer-motion';

const Prueba = () => {

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

    const morphVariation = {
        initial: { opacity: 0, borderRadius: "100%" },
        whileInView: { opacity: 1, borderRadius: "50%" },
    }

    return (
        <div className="h-fit w-screen bg-red-500 pt-24 pb-10">
            <motion.div
                variants={slideLeftVariation} initial="initial"
                whileInView="whileInView"
                viewport={{ once: false, amount: 0.3}}
                transition={{ duration: 0.6, ease: "linear" }}
            >
                <div className="flex flex-col space-y-12 px-6 font-Cambo text-white text-lg">
                    <h1 className="text-4xl text-center font-bold">Prueba</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A eius nisi
                        magnam dignissimos accusamus harum odit temporibus consequatur
                        explicabo modi esse, aliquid ab nostrum voluptatibus architecto
                        repudiandae voluptatem eveniet omnis.
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
                        necessitatibus consectetur ducimus quis et voluptatem numquam
                        voluptate. Culpa amet animi suscipit praesentium itaque aliquid!
                        Soluta omnis ducimus esse sunt maiores!
                    </p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus est
                        esse rerum ullam aspernatur. Debitis, vel! Harum odio sapiente eum
                        consectetur beatae vel cum, neque quis veritatis non optio.
                        Asperiores!
                    </p>
                </div>
            </motion.div>
        </div>

    );
}

export default Prueba
