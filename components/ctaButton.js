import React from 'react';
import Link from 'next/link';

const CtaButton = ({ link, text }) => {
  return (
    <Link href={link} className="float-right">
      <button className="ctaBtn">
        {text}
      </button>
    </Link>
  );
};

export default CtaButton;
