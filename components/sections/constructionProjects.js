import React from 'react';
import Image from 'next/image';
import circlesIcon from './../../public/icons/black_circles.svg';

import ProjectGallery from './projectGallery';

export default function ConstructionProjects() {
  return (
    <>
      <section className="sectionDefault flex-col justify-between text-myBlack border bg-myWhite">
        <div className="flex-col lg:flex-row lg:flex justify-between lg:mb-20">
          <div className="w-full mb-8 lg:m-0 flex flex-col-reverse lg:flex-row lg:gap-0 lg:flex justify-between lg:items-start lg:w-[55%]">
            <h1 className="headingOne lg:w-[50%]">WE SUPERVISE PROJECTS</h1>
            <Image
              src={circlesIcon}
              alt=""
              className="circleImage"
            />
          </div>

            <p className="paragraph mb-12 lg:w-[40%] w-full text-myBlack font-medium">
              Taikez team is constantly striving for perfection. We are lucky to
              work with notable and known clients, who trust us and let us guide
              them with our creative vision, making their real estate dreams
              true.
            </p>
        </div>

        <ProjectGallery />
      </section>
    </>
  );
}
