import { useState } from 'react';

export default function AnimatedMenuIcon() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      className="lg:hidden relative bottom-3 z-10 block border"
      onClick={handleMenuToggle}
    >
      <span className="sr-only">Toggle mobile menu</span>
      <div
        className={`hamburger-menu ${isOpen ? 'open' : ''}`}
        aria-expanded={isOpen}
      >
        <span className="hamburger-menu__bar" />
        <span className="hamburger-menu__bar" />
        <span className="hamburger-menu__bar" />
      </div>
    </button>
  );
}
