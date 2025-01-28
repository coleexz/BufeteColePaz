import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';


const ContactUs = () => {
    return (
        <div className="w-screen h-[35rem] bg-white relative">
            <div className="flex justify-center items-center bg-[#212121] opacity-70 w-11/12 h-3/5 absolute left-4 top-[4rem]"></div>

            <div className="absolute bottom-0 w-full h-5/6 bg-[#212121] flex justify-center items-center">
                <div className="max-w-4xl w-full px-8 text-white">
                    <div className="space-y-12">
                    {/* Location Section */}
                    <div className="flex items-start space-x-6">
                        <div className="bg-[#444] p-8 rounded-full shadow-lg">
                              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-md" />
                        </div>
                        <div className = "flex flex-col">
                            <h2 className="text-2xl font-bold">Location</h2>
                            <div>
                            <p className="text-lg mt-2">Plaza Terravista</p>
                            <a href="#" className="text-lg underline mt-2 inline-block">
                                View on Google Map
                            </a>
                        </div>
                        </div>
                    </div>

                    {/* Email Section */}
                    <div className="flex items-start space-x-6">
                        <div className="bg-[#444] p-8 rounded-full shadow-lg">
                        <FontAwesomeIcon icon={faEnvelope} className="text-md" />
                        </div>
                        <div>
                        <h2 className="text-2xl font-bold">E-mail</h2>
                        <p className="text-lg mt-2">jcolemedina@yahoo.com</p>
                        </div>
                    </div>

                    {/* Phone Section */}
                    <div className="flex items-start space-x-6">
                        <div className="bg-[#444] p-8 rounded-full shadow-lg">
                        <FontAwesomeIcon icon = {faPhoneAlt} className="text-md" />
                        </div>
                        <div>

                        <h2 className="text-2xl font-bold">Phone</h2>
                        <p className="text-lg mt-2">+504 9639-9980</p>

                        </div>
                    </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ContactUs
