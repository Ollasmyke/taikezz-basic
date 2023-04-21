/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import circlesIcon from './../../public/icons/black_circles.svg';
import rectangle from './../../public/icons/Rectangle.svg';

import ProjectGallery from './projectGallery';

export default function LatestProjects() {
  return (
    <>
      <section className="w-full space-y-12 px-[160px] py-32 flex-col justify-between text-myBlack border bg-myWhite">
        <div className="flex gap-x-28">

          <div className="w-[40%]">
              <div className="space-y-2 headingOne">
                <h1>LATEST</h1>
                <h1>PROJECT</h1>
              </div>
              <div className="w-full">
                <Image src={rectangle} alt="" className="w-20 h-5" />
              </div>
          </div>

          <div className="w-[60%] flex-col space-y-14 justify-self-end">
            <div className="flex space-x-16">
              <Image src={circlesIcon} alt="" className="w-20 h-20" />
              <div className="">
                <p className="paragraph">
                  Taikez team is constantly striving for perfection. We are lucky 
                  to work with notable and known clients, who trust us and let us 
                  guide them with our creative vision, making their real estate dreams true.
                </p>
              </div>
            </div> 
          </div>

        </div>

        <ProjectGallery />
      </section>
    </>
  );
}
