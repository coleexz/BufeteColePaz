import React from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {
    return (
        <motion.div
            className="w-screen h-[34rem] px-[0.1rem] bg-white relative flex justify-center items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5 }}
        >
            {/* Background Box Effect */}
            <motion.div
                className="absolute w-11/12 md:w-10/12 lg:w-3/4 lg:h-4/6 h-[85%] bg-[#5a5243] opacity-70 rounded-xl"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.7 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1 }}
            ></motion.div>

            {/* Contact Card */}
            <motion.div
                className="relative w-full max-w-4xl bg-[#212121] text-white shadow-lg rounded-xl px-[2rem] md:px-8 lg:px-[15rem] py-10"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1 }}
            >
                <div className="flex flex-col items-center gap-10">

                    {/* Section Title */}
                    <motion.h1
                        className="text-3xl lg:text-4xl font-bold text-[#B69D74] text-center"
                        initial={{ y: -30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        Contact Us
                    </motion.h1>

                    {/* Contact Sections - One Column Layout, Two Column Items */}
                    <div className="flex flex-col w-full space-y-6 pr-10 pb-4">
                        {/* Contact details array for mapping */}
                        {[
                            {
                                icon: "https://img.icons8.com/?size=100&id=59830&format=png&color=b69d74",
                                title: "Location",
                                text: "Plaza Terravista",
                                link: "View on Google Map",
                            },
                            {
                                icon: "https://img.icons8.com/?size=100&id=60688&format=png&color=b69d74",
                                title: "E-mail",
                                text: "jcolemedina@yahoo.com\ncfpazsouth@yahoo.com",
                                link: null,
                            },
                            {
                                icon: "https://img.icons8.com/?size=100&id=78382&format=png&color=b69d74",
                                title: "Phone",
                                text: "+504 9639-9980",
                                link: null,
                            }
                        ].map((contact, index) => (
                            <motion.div
                                key={index}
                                className="grid grid-cols-2 items-center"
                                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 1, delay: 0.5 + index * 0.3 }}
                            >
                                {/* Left - Icon */}
                                <motion.div
                                    className="flex justify-center"
                                    whileHover={{ scale: 1.2 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="bg-[#444] p-4 md:p-6 rounded-full shadow-lg">
                                        <img src={contact.icon} className = "w-10 h-10"></img>
                                    </div>
                                </motion.div>
                                {/* Right - Text */}
                                <div>
                                    <h2 className="text-xl  text-[#B69D74] md:text-2xl font-bold">{contact.title}</h2>
                                    <p className="text-md md:text-lg mt-2">{contact.text}</p>
                                    {contact.link && (
                                        <a href="#" className="text-md md:text-lg underline mt-2 inline-block">
                                            {contact.link}
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default ContactUs;
