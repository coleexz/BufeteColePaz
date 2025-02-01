import React from 'react';

const AboutClaudia = () => {
  const ClaudiaEducation = [
    {
      grado: "Master in Law",
      universidad: "Universidad Nacional Autonoma de Honduras",
      fecha: "2000-2002",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quas optio cupiditate in, harum aspernatur mollitia voluptatem quam? Exercitationem rem quod possimus dolores alias molestias molestiae voluptatem ab ipsum quam!",
    },
    {
      grado: "Licenciatura en Derecho",
      universidad: "Universidad Nacional Autonoma de Honduras",
      fecha: "2002-2004",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quas optio cupiditate in, harum aspernatur mollitia voluptatem quam? Exercitationem rem quod possimus dolores alias molestias molestiae voluptatem ab ipsum quam!",
    },
  ];

  return (
    <div className="bg-[#444444] py-14 text-white px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl lg:text-5xl font-bold text-center mb-8">
          Claudia Francisca Paz South
        </h1>

        {/* Photo Section */}
        <div className="flex justify-center mb-8">
          <button className="border-8 border-[#B69D74] w-60 h-60 lg:w-80 lg:h-80 rounded-2xl animate-[ybounce_8s_infinite]">
            {/* Replace with an actual image if available */}
            foto de mama
          </button>
        </div>

        {/* Description */}
        <div className="mx-auto mb-12">
          <p className="text-md bg-[#333] rounded-lg p-6 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quas
            optio cupiditate in, harum aspernatur mollitia voluptatem quam?
            Exercitationem rem quod possimus dolores alias molestias molestiae
            voluptatem ab ipsum quam!
          </p>
        </div>

        {/* Education Section Title */}
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-8">
          Education
        </h2>

        {/* Education Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {ClaudiaEducation.map((education, index) => (
            <div
              key={index}
              className="bg-[#333] rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl lg:text-4xl font-bold mb-2">
                {education.grado}
              </h3>
              <p className="text-lg lg:text-xl font-semibold mb-1">
                {education.universidad}
              </p>
              <p className="text-lg lg:text-xl font-semibold mb-3">
                {education.fecha}
              </p>
              <p className="text-md leading-relaxed">
                {education.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutClaudia;
