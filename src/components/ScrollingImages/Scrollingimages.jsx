import React from "react"
import "../../ScrollingImages.css"

import foto1 from "../../assets/foto1.jpg"
import foto2 from "../../assets/foto2.jpg"
import foto3 from "../../assets/foto3.jpg"
import foto4 from "../../assets/foto4.jpg"
import foto5 from "../../assets/foto5.jpg"
import foto6 from "../../assets/foto6.jpg"
import foto7 from "../../assets/foto7.jpg"

const ScrollingImages = () => {

    const images = [foto1, foto2, foto3, foto4, foto5, foto6, foto7]

    // Shuffle images to ensure no same images appear at the same time in both arrays
    const shuffledImages = [...images].sort(() => Math.random() - 2.5)
    const reorderedImages = [...shuffledImages]

  return (
    <div>
      {/* First slider (Right to Left) */}
      <div className="slider">
        <div className="slide-track">
          {images.map((src, index) => (
            <div className="slide" key={index}>
              <img src={src} alt={`Slide ${index}`} />
            </div>
          ))}
          {images.map((src, index) => (
            <div className="slide" key={`clone-${index}`}>
              <img src={src} alt={`Clone ${index}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Second slider (Left to Right) */}
      <div className="slider">
        <div className="reverse-slide-track">
          {reorderedImages.map((src, index) => (
            <div className="slide" key={`rev-${index}`}>
              <img src={src} alt={`Reverse Slide ${index}`} />
            </div>
          ))}
          {reorderedImages.map((src, index) => (
            <div className="slide" key={`rev-clone-${index}`}>
              <img src={src} alt={`Reverse Clone ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ScrollingImages
