import React from 'react';
import Link from 'next/link';

const CtaButton = ({ link, text }) => {
  return (
    <Link href={link} className="float-right">
      <button className="text-[12px] px-16 py-3 text-myWhite bg-secondary hover:bg-blue-900">
        {text}
      </button>
    </Link>
  );
};

export default CtaButton;
