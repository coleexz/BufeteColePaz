import React from 'react'
import { useState } from 'react';

const Email = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name: ", name);
        console.log("Email: ", email);
        console.log("Subject: ", subject);
    }

return (
    <div className="h-fit w-screen bg-[#e0e1dd] text-[#333] pb-6">
            <div className="flex flex-col items-center justify-center">
                    <h1 className="text-2xl pt-8 py-4 font-bold">
                            SEND US AN EMAIL
                    </h1>

                    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-4">
                            <input
                                    className="border-4 px-12 py-6 border-black bg-[#e0e1dd] placeholder-current"
                                    placeholder="Name" 
                                    value={name}
                                    onChange={handleNameChange}
                            />
                            <input
                                    className="border-4 px-12 py-6 border-black bg-[#e0e1dd] placeholder-current"
                                    placeholder="Email"
                                    value={email}
                                    onChange={handleEmailChange}
                            />
                            <input
                                    className="border-4 px-12 py-20 border-black bg-[#e0e1dd] placeholder-current"
                                    placeholder="Subject"
                                    value={subject}
                                    onChange={handleSubjectChange}
                            />
                            <button
                                    type="submit"
                                    className="py-4 px-8 border-4 bg-black hover:bg-gray-800 text-white"
                            >
                                    Submit
                            </button>
                    </form>
            </div>
    </div>
)
}

export default Email
