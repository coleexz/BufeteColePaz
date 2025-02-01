import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faCommentDots } from '@fortawesome/free-solid-svg-icons';

const Email = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name: ", name);
        console.log("Email: ", email);
        console.log("Subject: ", subject);
    };

    return (
        <motion.div
            className="h-[36rem] w-screen bg-[#e0e1dd] text-[#333] flex flex-col items-center justify-center pt-2 px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
        >
            {/* Header */}
            <motion.h1
                className="text-3xl md:text-4xl font-bold mb-10 text-center"
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                SEND US AN EMAIL
            </motion.h1>

            {/* Form Container */}
            <motion.form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 w-full max-w-lg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ staggerChildren: 0.3 }}
            >
                {/* Input Fields with Icons */}
                {[
                    { placeholder: "Name", value: name, setter: setName, icon: faUser },
                    { placeholder: "Email", value: email, setter: setEmail, icon: faEnvelope },
                    { placeholder: "Message", value: subject, setter: setSubject, icon: faCommentDots, large: true },
                ].map((input, index) => (
                    <motion.div
                        key={index}
                        className="relative w-full"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.6 }}
                    >
                        <FontAwesomeIcon
                            icon={input.icon}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl"
                        />
                        <input
                            type="text"
                            className={`w-full border-2 border-gray-600 pl-12 pr-6 py-4 rounded-xl bg-[#f8f9fa] text-lg focus:ring-4 focus:ring-gray-400 transition-all duration-300 outline-none shadow-md ${
                                input.large ? "h-32 resize-none" : "h-16"
                            }`}
                            placeholder={input.placeholder}
                            value={input.value}
                            onChange={(e) => input.setter(e.target.value)}
                        />
                    </motion.div>
                ))}

                {/* Submit Button */}
                <motion.button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-black text-white font-semibold text-lg shadow-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Submit
                </motion.button>
            </motion.form>
        </motion.div>
    );
};

export default Email;
