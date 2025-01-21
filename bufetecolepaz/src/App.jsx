import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//importing components
import Home from './components/Home/Home.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'

function App() {

    const headerButtons = ["Home", "About Us", "Services", "Contact Us"]

  return (
      <div className = "w-screen h-screen">
            <header className = " fixed top-0 flex items-center bg-[#5b4807] p-6 text-white w-screen z-50">
                    <div className = "pr-10" >
                        Logo
                    </div>
                    <div className = "flex justify-center gap-4">
                        {headerButtons.map((button) => (
                            <button className = "rounded-full border border-black px-4 break-words" key={button}>{button}</button>
                        ))}
                    </div>
            </header>
            <div className = "pt-[4.5rem] ">
                    <Home />
                    <AboutUs />
            </div>
      </div>
  )
}

export default App
