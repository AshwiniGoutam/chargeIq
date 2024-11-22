import React, { useState, useEffect } from "react";
import "./page.css";

export default function FeatureImages() {
  const images = [
    "../../assets/images/mobile-mockup-1.png",
    "../../assets/images/mobile-mockup-2.png",
    "../../assets/images/mobile-mockup-3.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeKey((prevKey) => prevKey + 1); 
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="image-slider">
      <img
        key={fadeKey} // This forces a re-render when the key changes
        src={images[currentImageIndex]}
        alt="image slider"
        className="fade-image"
      />
    </div>
  );
}
