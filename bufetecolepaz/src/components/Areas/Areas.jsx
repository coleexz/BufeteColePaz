import React from 'react';

const Areas = () => {
  const areas = [
    {
      name: "Family Law",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      icon: "🏛️",
    },
    {
      name: "Criminal Law",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      icon: "⚖️",
    },
    {
      name: "Business Law",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      icon: "📜",
    },
    {
      name: "Immigrant Law",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      icon: "🌍",
    },
  ];

  return (
    <div className="w-screen h-fit bg-[#e0e1dd] pt-12 overflow-hidden py-10">
      {/* Title Section */}
      <div className="flex flex-col h-10 w-screen items-center justify-center">
        <h1 className="text-sm py-4 font-bold text-[#B69D74]">HOW CAN WE HELP YOU?</h1>
        <h1 className="text-2xl font-semibold text-[#333]">Our Legal Practice Areas</h1>
      </div>

      {/* Areas Section */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-16">
          {areas.map((area, index) => (
            <div
              key={index}
              className="w-[22rem] h-[20rem] lg:w-[30rem] lg:h-[30rem] pt-8 lg:pt-0 bg-[#212121] rounded-xl flex flex-col items-center justify-center shadow-lg"
            >
              {/* Icon Section */}
              <div className="relative flex items-center justify-center">
                {/* Outer Diamond (background effect) */}
                <div className="absolute p-[2.7rem] lg:p-[2.95rem] bg-gray-600 rotate-45 rounded-lg shadow-lg opacity-30" style={{ top: '-15px' }}></div>
                {/* Inner Diamond */}
                <div className="bg-[#444] rotate-45 rounded-lg p-6 lg:p-[1.7rem] shadow-md flex items-center justify-center relative z-10">
                  <span className="text-4xl text-[#B69D74] -rotate-45">{area.icon}</span>
                </div>
              </div>

              {/* Text Content */}
              <h1 className="text-white text-2xl font-semibold mb-4 lg:pt-8 mt-8">{area.name}</h1>
              <p className="text-white text-center px-6 lg:px-20 text-md mb-8 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Areas;
