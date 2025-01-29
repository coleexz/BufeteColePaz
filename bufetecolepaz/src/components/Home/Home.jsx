import React from 'react'
import image from '../../assets/image.png'

const Home = () => {
    return (
        <div className="bg-[#212121] h-5/6 pt-[6.5rem] relative overflow-hidden" >
            <div className="grid grid-rows-2 w-screen">
                <div className="flex flex-col justify-center items-center px-10">
                    <h1 className="text-5xl text-white font-bold p-4">
                        Attorneys Fight for justice
                    </h1>
                    <p className="justify-end text-lg text-white p-2">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
                        inventore neque, molestiae, eius culpa corrupti quos ipsa harum sint
                        asperiores iure earum autem? Porro, esse optio consequuntur ratione
                        nobis nostrum.
                    </p>

                    <div className="pt-5">
                        <button className="bg-[#212121] border-4 p-4 border-[#B69D74] text-white hover:bg-[#B69D74] hover:transition-all hover:duration-500">
                            FREE CONSULTATION -&gt;
                        </button>
                    </div>
                </div>

                <div className="flex flex-col items-center pt-20">
                    <div className="flex flex-row gap-20 items-center z-0 text-white">
                        <button className="border-8 border-[#B69D74] animate-[bounce_3s_infinite]">
                            foto de papa
                        </button>
                        <button className="border-8 border-[#B69D74] animate-[bounce_3s_infinite]">
                            foto de mama
                        </button>
                    </div>
                </div>
            </div>

            {/* White section spanning both backgrounds */}
            <div className="absolute left-[12rem] transform -translate-x-[12rem] top-[41%]">
                <div className="flex flex-row border-[0.35rem] border-[#B69D74] border-opacity-60 bg-white shadow-lg rounded-lg w-72 h-24">
                    <div className="bg-blue-500 h-[5.4rem] w-full basis-3/5">
                        IMAGEN ACA
                    </div>
                    <div className="flex flex-col justify-center items-start w-full pl-[1.5rem] text-[#B69D74]">
                        <h1 className="text-xl font-bold whitespace-nowrap">
                            100% Legal
                        </h1>
                        <h1 className="text-md font-bold whitespace-nowrap">
                            Got Approved
                        </h1>
                    </div>
                </div>
            </div>

            <div className="bg-white w-screen min-h-screen flex flex-col items-center pt-[10rem]">
                <div className="relative">
                    {/* Outer border frame */}
                    <div>
                        <div className="border-[0.8rem] border-[#B69D74] w-[24rem] h-[28rem] absolute -top-6 -left-10 animate-xbounce z-10"></div>
                    </div>

                    {/* Image container */}
                    <div className="relative z-20">
                        <img
                            src={image}
                            alt="imagen"
                            className="w-[23rem] h-[25rem] object-cover shadow-lg"
                        />
                    </div>
                </div>

                {/* Full-screen text container */}
                <div className="max-w-[52rem] pb-16">
                    <div className="w-screen h-max flex flex-col justify-center items-center mt-10 pt-6 px-10 text-center gap-8">
                        <div className = "p-6 bg-[#e0e1dd] rounded-lg">
                            <h1 className="text-2xl font-bold text-[#333] pt-4">Mission</h1>
                            <p className="text-lg text-gray-600 mt-4 leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. At tempora unde
                                voluptas quia facilis consequuntur commodi repellendus aperiam
                                temporibus, cumque necessitatibus, qui, facere vitae odit a officiis
                                aliquid quam? Incidunt.
                            </p>
                        </div>

                        <div className = "p-6 bg-[#e0e1dd] rounded-lg">
                            <h1 className="text-2xl font-bold text-[#333] pt-4">Vision</h1>
                            <p className="text-lg text-gray-600 mt-4 leading-relaxed">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
                                consequatur aliquid molestiae provident suscipit temporibus inventore,
                                fugiat, sequi dolorum iste repellendus? Sequi rerum quo laborum aut
                                repellendus, officia et veritatis.
                            </p>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Home
