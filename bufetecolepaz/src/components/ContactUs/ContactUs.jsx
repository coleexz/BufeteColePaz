import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
    return (
        <div className="w-screen h-[40rem] px-[0.1rem] bg-white relative flex justify-center items-center">
            {/* Background Box Effect */}
            <div className="absolute w-11/12 md:w-10/12 lg:w-3/4 lg:h-4/6 h-[85%] bg-[#212121] opacity-70 rounded-xl"></div>

            {/* Contact Card */}
            <div className="relative w-full max-w-4xl bg-[#212121] text-white shadow-lg rounded-xl px-[2rem] md:px-8 lg:px-[15rem] py-10">
                <div className="flex flex-col items-center gap-10">

                    {/* Section Title */}
                    <h1 className="text-3xl lg:text-4xl font-bold text-white text-center">Contact Us</h1>

                    {/* Contact Sections - One Column Layout, Two Column Items */}
                    <div className="flex flex-col w-full space-y-6 pr-10 pb-4">

                        {/* Location Section */}
                        <div className="grid grid-cols-2 items-center">
                            {/* Left - Icon */}
                            <div className="flex justify-center">
                                <div className="bg-[#444] p-4 md:p-6 rounded-full shadow-lg">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-2xl md:text-3xl" />
                                </div>
                            </div>
                            {/* Right - Text */}
                            <div>
                                <h2 className="text-xl md:text-2xl font-bold">Location</h2>
                                <p className="text-md md:text-lg mt-2">Plaza Terravista</p>
                                <a href="#" className="text-md md:text-lg underline mt-2 inline-block">
                                    View on Google Map
                                </a>
                            </div>
                        </div>

                        {/* Email Section */}
                        <div className="grid grid-cols-2 items-center">
                            {/* Left - Icon */}
                            <div className="flex justify-center">
                                <div className="bg-[#444] p-4 md:p-6 rounded-full shadow-lg">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-2xl md:text-3xl" />
                                </div>
                            </div>
                            {/* Right - Text */}
                            <div>
                                <h2 className="text-xl md:text-2xl font-bold">E-mail</h2>
                                <p className="text-md md:text-lg mt-2">jcolemedina@yahoo.com</p>
                            </div>
                        </div>

                        {/* Phone Section */}
                        <div className="grid grid-cols-2 items-center">
                            {/* Left - Icon */}
                            <div className="flex justify-center">
                                <div className="bg-[#444] p-4 md:p-6 rounded-full shadow-lg">
                                    <FontAwesomeIcon icon={faPhoneAlt} className="text-2xl md:text-3xl" />
                                </div>
                            </div>
                            {/* Right - Text */}
                            <div>
                                <h2 className="text-xl md:text-2xl font-bold">Phone</h2>
                                <p className="text-md md:text-lg mt-2">+504 9639-9980</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default ContactUs;
