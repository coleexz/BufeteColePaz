import React from 'react'

const Home = () => {
  return (
    <div className="bg-[#5A5243] h-5/6 pt-[9.5rem] relative">
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
            <button className="bg-[#5A5243] border-4 p-4 border-[#B69D74] text-white hover:bg-[#B69D74] hover:transition-all hover:duration-500">
              FREE CONSULTATION -&gt;
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center pt-20">
          <div className="flex flex-row gap-20 items-center z-0">
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
        <div className="absolute left-1/2 transform -translate-x-[12rem] top-[53.5%]">
            <div className="flex flex-row border-[0.35rem] border-[#B69D74] border-opacity-60 bg-white shadow-lg rounded-lg w-72 h-24">
                <div className = "bg-blue-500 h-[5.4rem] w-full basis-3/5">
                    IMAGEN ACA
                </div>
                <div className = "flex flex-col justify-center items-start w-full pl-[1.5rem] text-[#B69D74]">
                    <h1 className = "text-xl font-bold whitespace-nowrap">
                        100% Legal
                    </h1>
                    <h1 className = "text-md font-bold whitespace-nowrap">
                        Got Approved
                    </h1>


                </div>

            </div>
        </div>

      <div className="bg-white w-screen h-screen pt-[6rem] pl-4 ">
            <div className = "border-8 border-[#B69D74] bg-white w-[21rem] h-[25rem] animate-xbounce ">

            </div>
      </div>
    </div>
  )
}

export default Home
