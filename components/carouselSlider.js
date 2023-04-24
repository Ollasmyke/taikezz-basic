import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import cn from "classnames";

import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

const images = [
  { src: "/../public/images/slideOne.jpg", alt: "Image 1" },
  { src: "/../public/images/slideTwo.jpg", alt: "Image 1" },
  { src: "/../public/images/slideThree.jpg", alt: "Image 1" },
  { src: "/../public/images/slideFour.jpg", alt: "Image 1" },
];

const CarouselSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Create an interval to automatically change the active slide
    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 3000);

    // Clear the interval when the component is unmounted or the active slide is changed
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
    setIsPaused(true);
  };

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className="relative w-full h-[70vh]">
      <div className="absolute top-0 left-0 w-full h-full">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            className={cn("absolute top-0 left-0 w-full h-full transition-opacity", {
              "opacity-100": activeIndex === index,
              "opacity-0": activeIndex !== index,
            })}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={cn("w-3 h-3 rounded-full mr-2 transition-colors", {
              "bg-gray-500": activeIndex !== index,
              "bg-white": activeIndex === index,
            })}
          />
        ))}
      </div>

      <button
        className="slideBtn left-24"
        style={{ opacity: isPaused ? 1 : 0 }}
        onClick={handlePrevClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ArrowBackIosRoundedIcon />
      </button>
      
      <button
        className="slideBtn right-24"
        style={{ opacity: isPaused ? 1 : 0 }}
        onClick={handlePrevClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ArrowForwardIosRoundedIcon />
      </button>
    </div>
  );
};

export default CarouselSlider;
