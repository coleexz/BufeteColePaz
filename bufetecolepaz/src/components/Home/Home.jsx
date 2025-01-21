import React from 'react'

const Home = () => {
return (
    <div className="bg-[#daba9e] min-h-screen">
        <div className="grid grid-rows-2 w-screen h-screen">
            <div className="bg-red-500 flex flex-col justify-center items-center px-10 ">
                <h1 className = "text-2xl p-5">
                    Attorneys Fight for justice
                </h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci inventore neque, molestiae,
                    eius culpa corrupti quos ipsa harum sint asperiores iure earum autem? Porro, esse optio consequuntur ratione nobis nostrum.
                </p>

                <div className = "pt-5">
                    <button className = "bg-blue-500">
                        Contactanos!
                    </button>
                </div>
            </div>
            <div className="bg-blue-500 flex flex-col items-center justify-center">
                <h1 className = "text-2xl pb-10 "> Contact Us</h1>
                <div className = "flex flex-row gap-20 items-center z-0">
                    <button className = "animate-bounce border-4 border-gray-300">
                        foto de papa
                    </button>
                    <button className = "animate-bounce border-4 border-gray-300">
                        foto de mama
                    </button>
                </div>
            </div>
        </div>
    </div>
)
}

export default Home
