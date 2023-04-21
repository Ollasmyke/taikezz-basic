/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import circlesIcon from './../../public/icons/white_circles.svg';
import rectangle from './../../public/icons/Rectangle.svg';

export default function offers() {
  return (
    <>
      <section className="w-full px-[160px] py-32 flex gap-x-28 justify-between text-myWhite border bg-secondary">
        <div className="w-[40%]">
            <div className="space-y-[80%]">
                <div className="space-y-2 headingOne">
                    <h1>WHAT WE</h1>
                    <h1>OFFER</h1>
                </div>
                <div className="w-full">
                    <Image src={rectangle} alt="" className="w-20 h-5" />
                </div>
            </div>
        </div>

        <div className="w-[60%] flex-col space-y-14 justify-self-end">

          {/* Quality service */}
          <div className="flex space-x-16">
            <Image src={circlesIcon} alt="" className="w-20 h-20" />
            <div className="space-y-2">
              <h4 className="text-base">EXPERIENCED TEAM</h4>
              <p className="paragraph">
                Each of us is a master of our craft – we've worked a number of
                years in our field and each has passion and creative vision for
                every project we put our hands on.
              </p>
            </div>
          </div>

          {/* Experienced team */}
          <div className="flex space-x-16">
            <Image src={circlesIcon} alt="" className="w-20 h-20" />
            <div className="space-y-2">
              <h4 className="text-base">QUALITY TO DIE FOR</h4>
              <p className="paragraph">
                We pay a lot of attention to each and every detail, because we 
                know that we are in charge of creating somebody's safe haven. 
                We partner up with the best craftsmen to ensure our famed quality.
              </p>
            </div>
          </div>

            {/* VISIONARIES OF THE FUTURE */}
          <div className="flex space-x-16">
            <Image src={circlesIcon} alt="" className="w-20 h-20" />
            <div className="space-y-2">
              <h4 className="text-base">VISIONARIES OF THE FUTURE</h4>
              <p className="paragraph">
                We're not scared to go beyond the horizon. As the visionaries of tomorrow, 
                we won't say no to experimentation, unusual materials, or unlikely combinations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
