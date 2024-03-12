import React, { useCallback, useMemo } from "react";
import { useState, useEffect, useRef } from "react";

import "./carousel.css";

interface CarouselProps {
  children: React.ReactNode;
  onChange: (index: number) => void;
}

const Carousel = ({ children, onChange }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const items = useMemo(() => React.Children.toArray(children), [children]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
    onChange(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, items, onChange]);

  useEffect(() => {
    const intervalId = setInterval(() => handleNext(), 5000);
    return () => clearInterval(intervalId);
  }, [items, currentIndex, handleNext]);

  return (
    <>
      <div className="carousel" ref={carouselRef}>
        {items[currentIndex]}
      </div>
      <div>
        {items.map((_, index) => (
          <button
            className="carousel-action-btn"
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              onChange(index);
            }}
          >
            <p
              className={`action-btn ${index === currentIndex ? "active" : ""}`}
            />
          </button>
        ))}
      </div>
    </>
  );
};

export default Carousel;
