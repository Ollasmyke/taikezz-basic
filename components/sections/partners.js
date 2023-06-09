/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import circlesIcon from './../../public/icons/white_circles.svg';
import Rectangle from '../../public/icons/rectangle.svg';
import demdarzzy from './../../public/icons/demdarzzy.svg';

export default function Partners() {
  return (
    <>
      <section className="sectionDefault lg:flex lg:justify-between space-y-20 lg:space-y-0 text-myWhite bg-secondary">
        <div className="w-full space-y-20 lg:space-y-0 flex flex-col justify-between lg:w-[40%]">
          <div className="space-y-8">
            <h1 className="uppercase headingOne">Sister Companies</h1>
            <p className="paragraph">
              In our pursuit of achieving superior outcomes, we often collaborate 
              with our affiliated entities and strategic partners known for their 
              exceptional capabilities and expertise. Our approach ensures the delivery 
              of professional and high-quality solutions.
            </p>
          </div>
          <Image src={Rectangle} alt="" className="rectangularBar" />
        </div>

        <div className="w-[40%] space-y-20">
          <Image
            src={demdarzzy}
            alt="demdarzzy logo"
            className="w-[45%] lg:w-[35%] h-fit"
          />
          <Image
            src={demdarzzy}
            alt="demdarzzy logo"
            className="w-[45%] lg:w-[35%] h-fit"
          />
          <Image
            src={demdarzzy}
            alt="demdarzzy logo"
            className="w-[45%] lg:w-[35%] h-fit"
          />
        </div>
      </section>
    </>
  );
}
