import React, { useState, useEffect } from "react";
import "./page.css";

const cities = [
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Chennai",
  "Kolkata",
  "Jaipur",
  "Hyderabad",
  "Goa",
  "Ladakh",
  "Manali",
  "Kerala",
];

const topDestinations = [
  { name: "Goa", tagline: "Experience the beaches of Goa!" },
  { name: "Ladakh", tagline: "Explore the mountains of Ladakh!" },
  { name: "Kerala", tagline: "Discover the backwaters of Kerala!" },
];

const TripPlanner = () => {
  const [origin, setOrigin] = useState("Delhi");
  const [destination, setDestination] = useState("Mumbai");
  const [slides, setSlides] = useState([]);

  // Shuffle cities every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const newOrigin = cities[Math.floor(Math.random() * cities.length)];
      let newDestination;
      do {
        newDestination = cities[Math.floor(Math.random() * cities.length)];
      } while (newDestination === newOrigin);

      // Update slides array with shuffled cities
      setSlides((prevSlides) => [
        ...prevSlides.slice(-8), // Keep only the latest 8 slides
        { type: "city", content: `${newOrigin} → ${newDestination}` },
      ]);

      // Add a random destination card after every few slides
      if (Math.random() > 0.7) {
        const randomDestination =
          topDestinations[Math.floor(Math.random() * topDestinations.length)];
        setSlides((prevSlides) => [
          ...prevSlides,
          { type: "destination", content: randomDestination },
        ]);
      }
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="trip-banner">
      <h1>Plan Your Trip</h1>
      <div className="input-section">
        <select value={origin} onChange={(e) => setOrigin(e.target.value)}>
          {cities.map((city, index) => (
            <option key={index}>{city}</option>
          ))}
        </select>
        <select
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        >
          {cities.map((city, index) => (
            <option key={index}>{city}</option>
          ))}
        </select>
        <button
          onClick={() =>
            alert(`Planning trip from ${origin} to ${destination}`)
          }
        >
          Plan Now
        </button>
      </div>

      <div className="carousel">
        {slides.map((slide, index) => (
          <div key={index} className={`slide ${slide.type}`}>
            {slide.type === "city" ? (
              <p>{slide.content}</p>
            ) : (
              <>
                <h3>{slide.content.name}</h3>
                <p>{slide.content.tagline}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TripPlanner;
