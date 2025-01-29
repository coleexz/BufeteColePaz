import React from 'react'

const AboutClaudia = () => {

    const ClaudiaEducation = [
        {
            grado: "Master in Law",
            universidad: "Universidad Nacional Autonoma de Honduras",
            fecha: "2000-2002",
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quas optio cupiditate in, harum aspernatur mollitia voluptatem quam? Exercitationem rem quod possimus dolores alias molestias molestiae voluptatem ab ipsum quam!"
        },
        {
            grado: "Licenciatura en Derecho",
            universidad: "Universidad Nacional Autonoma de Honduras",
            fecha: "2002-2004",
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quas optio cupiditate in, harum aspernatur mollitia voluptatem quam? Exercitationem rem quod possimus dolores alias molestias molestiae voluptatem ab ipsum quam!"
        }

    ]
  return (
    <div className = "bg-[#888888] pt-6 h-fit text-white py-8 ">
        <div className = "flex flex-col items-center justify-center">
            {/* Juan Carlos Cole Medina */}
            <div>
                <div className = "pl-[7.8rem] pb-5">
                    <button className="border-8 border-[#B69D74] animate-[bounce_3s_infinite]">
                                foto de mama
                    </button>
                </div>
                <div className = "px-8 gap-4 flex flex-col justify-center items-center ">
                    <h1 className = "text-3xl font-bold">Claudia Francisca Paz South</h1>

                    <p className = "text-md bg-[#333] rounded-lg p-6  ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quas optio cupiditate in, harum aspernatur mollitia voluptatem quam? Exercitationem rem quod possimus dolores alias molestias molestiae voluptatem ab ipsum quam!
                    </p>

                    <h1 className = "text-3xl py-4 font-bold">Education</h1>
                        {ClaudiaEducation.map((education, index) => (
                            <div key={index} className = "flex flex-col items-center justify-center gap-4">
                                <div className = "bg-[#333] rounded-lg p-6">
                                    <div className = "space-y-2">
                                        <h1 className = "text-2xl font-bold">{education.maestria}</h1>
                                        <h1 className = "text-lg font-semibold">{education.universidad}</h1>
                                        <h1 className = "text-lg font-semibold ">{education.fecha}</h1>
                                        <p className = "text-md">{education.descripcion}</p>
                                    </div>
                                </div>

                            </div>

                        ))}

                </div>
            </div>

            {/* Claudia Francisca Paz South */}
            <div>

            </div>


        </div>
    </div>
  )
}

export default AboutClaudia
