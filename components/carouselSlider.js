import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import cn from 'classnames';

import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

const images = [
  {
    src: '/../public/images/slideFour.jpg',
    alt: 'Reliable Consultancy for Quality Site Projects & Modern Construction',
    description:
      'Experience reliable and efficient construction services with our team of expert engineers and quality assurance professionals. We deliver quality projects on time with safety adherence.',
    link: 'https://example.com/image1',
  },
  {
    src: '/../public/images/procurementServices.jpg',
    alt: "Streamline Your Organization's Procurement Process with our Expertise",
    description:
      'Our procurement team specializes in sourcing and purchasing general merchandise and equipment while negotiating the best prices and contracts for organizations.',
    link: 'https://example.com/image2',
  },
  {
    src: '/../public/images/slideSeven.jpg',
    alt: "Efficient and Reliable Labour Sourcing for Your Organization's Needs",
    description:
      'Learn how our consultancy company outsources skilled and unskilled labour, creating a reliable and cost-effective supply chain network. Discover our recommended steps.',
    link: 'https://example.com/image3',
  },
  {
    src: '/../public/images/increaseBusinessGrowth.jpg',
    alt: 'Unleash Your Business Potential: Let Us Help You Grow Beyond Expectations',
    description:
      'At Taikez, we help businesses thrive by providing expert advice on growth and establishment strategies, backed by market research and a team of expatriates.',
    link: 'https://example.com/image4',
  },
  {
    src: '/../public/images/retirementPlanning.png',
    alt: 'Unlock Your Retirement Potential with Our Expert Business Advice and Support',
    description:
      'As a firm, our goal is to empower retirees by offering advice and support on establishing businesses during retirement. We strive to be a trustworthy confidant, strategist, and expert source of information.',
    link: 'https://example.com/image4',
  },
  {
    src: '/../public/images/financialServices.jpg',
    alt: 'Secure Your Financial Future with Our Professional Audit and Advisory Services',
    description:
      'We understand the critical role communication plays in effective auditing and financial advice. Our team of professional auditors is dedicated to partnering with you to safeguard your financial status.',
    link: 'https://example.com/image4',
  },
  {
    src: '/../public/images/slideThree.jpg',
    alt: 'Experience Heavenly Homes with Our Interior Decoration and Furniture Fitting Services',
    description:
      'Specializing in interior decoration, furniture fitting, and office fitting, our team of interior decorators offer exceptional services that turn your home into a heavenly abode.',
    link: 'https://example.com/image4',
  },
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
    }, 5000);

    // Clear the interval when the component is unmounted or the active slide is changed
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
    setIsPaused(true);
  };

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className="relative w-full h-[75vh]">
      <div className="absolute top-0 left-0 w-full h-full">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            className={cn(
              'absolute top-0 left-0 w-full h-full transition-opacity',
              {
                'opacity-100': activeIndex === index,
                'opacity-0': activeIndex !== index,
              }
            )}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
      <div
        className="font-jost w-[60%] md:w-[50%] lg:w-[40%] px-4 pt-3 pb-7 absolute bottom-1/2 translate-y-1/2 bg-white/[0.7] left-1/2 transform -translate-x-1/2 text-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h3 className="text-xl text-myBlack leading-normal font-medium border-b pb-2 mb-3">
          {images[activeIndex].alt}
        </h3>
        <p className="text-base text-gray-800 leading-tight mb-7">
          {images[activeIndex].description}
        </p>
        <a
          href={images[activeIndex].link}
          target="_blank"
          rel="noopener noreferrer"
          className="ctaBtn"
        >
          Learn More
        </a>
      </div>

      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={cn('w-2 h-2 rounded-full mr-4 transition-colors', {
              'bg-myGray': activeIndex !== index,
              'bg-white': activeIndex === index,
            })}
          />
        ))}
      </div>

      <button
        className="slideBtn left-10 md:left-16 lg:left-24"
        style={{ opacity: isPaused ? 1 : 0 }}
        onClick={handlePrevClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ArrowBackIosRoundedIcon className="sliderArrowIcon" />
      </button>

      <button
        className="slideBtn right-10 md:right-16 lg:right-24"
        style={{ opacity: isPaused ? 1 : 0 }}
        onClick={handleNextClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ArrowForwardIosRoundedIcon className="sliderArrowIcon" />
      </button>
    </div>
  );
};

export default CarouselSlider;
