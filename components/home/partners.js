/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import circlesIcon from './../../public/icons/white_circles.svg';
import rectangle from './../../public/icons/rectangle.svg';
import demdarzzy from './../../public/icons/demdarzzy.svg';

export default function Process() {
  return (
    <>
      <section className="w-full px-[160px] py-32 flex gap-x-28 justify-between text-myWhite bg-secondary">
        <div className="w-[40%]">
          <div className="space-y-[100%]">
            <div className="space-y-8">
              <div className="space-y-2 uppercase headingOne">
                <h1>Sister</h1>
                <h1>Companies</h1>
              </div>
              <p className="paragraph myDarkGray">
                To bring our vision into reality, we need the best partners out
                there. We've joined hands with one of the best when it comes to
                materials, lightning and furniture to achieve sophisticated
                results.
              </p>
            </div>
            <div className="w-full">
              <Image src={rectangle} alt="" className="w-20 h-5" />
            </div>
          </div>
        </div>

        <div className="w-[35%] space-y-16">
          <Image
            src={demdarzzy}
            alt="demdarzzy logo"
            className="w-[40%] h-fit"
          />
          <Image
            src={demdarzzy}
            alt="demdarzzy logo"
            className="w-[40%] h-fit"
          />
          <Image
            src={demdarzzy}
            alt="demdarzzy logo"
            className="w-[40%] h-fit"
          />
        </div>
      </section>
    </>
  );
}
