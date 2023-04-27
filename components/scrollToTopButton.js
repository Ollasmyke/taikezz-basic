import React from 'react'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import cn from 'classnames';

// import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import ArrowUpIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';


const ScrollToTopButton = ({ isVisible }) => {
  const handleScrollTop = () => {
    scroll.scrollToTop({ smooth: true });
  };

  return (
    <div
      className={cn(
        'fixed bottom-4 right-10 z-50',
        isVisible ? 'opacity-100' : 'opacity-0'
      )}
    >
      <ScrollLink to="top" smooth duration={300}>
        <button
          className="scrollToTopBtn"
          onClick={handleScrollTop}
        >
          <ArrowUpIosRoundedIcon />
        </button>
      </ScrollLink>
    </div>
  );
};

export default ScrollToTopButton;
