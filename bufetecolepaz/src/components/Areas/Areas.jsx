import React from 'react';

const Areas = () => {
  const areas = [
    {
      name: "Family Law",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      icon: "🏛️", // You can replace this with an actual image or icon component
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
        <div className="flex flex-col h-10 w-screen items-center justify-center">
            <h1 className="text-sm py-4 font-bold text-[#B69D74]">HOW CAN WE HELP YOU?</h1>
            <h1 className="text-2xl font-semibold text-[#333]">Our Legal Practice Areas</h1>
        </div>

        {/* Areas Section */}
            <div className="flex flex-wrap justify-center gap-8 pt-16">
                {areas.map((area, index) => (
                    <div
                        key={index}
                        className="w-[22rem] h-[20rem] pt-8 bg-[#212121] rounded-xl flex flex-col items-center justify-center shadow-lg"
                    >
                        <div className="relative flex items-center justify-center">
                            {/* Outer Diamond (background effect) */}
                            <div className="absolute p-[2.7rem] bg-gray-600 rotate-45 rounded-lg shadow-lg opacity-30 " style={{ top: '-15px' }}></div>
                            {/* Inner Diamond */}
                            <div className="bg-[#444] rotate-45 rounded-lg p-6 shadow-md flex items-center justify-center relative z-10">
                                <span className="text-4xl text-[#B69D74] -rotate-45">{area.icon}</span>
                            </div>
                        </div>

                        <h1 className="text-white text-2xl font-semibold mb-4 mt-8">{area.name}</h1>
                        <p className="text-white text-center px-6 text-md mb-8 leading-relaxed">
                            {area.description}
                        </p>

                    </div>
                ))}
            </div>

    </div>
);
};

export default Areas;
