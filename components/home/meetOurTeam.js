/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';

import CeoPhoto from './../../public/images/ceo.jpg';
import rectangle from './../../public/icons/blackRectangle.svg';

export default function meetOurTeam() {
  return (
    <section className="flex px-[160px] py-32 space-x-8 text-myBlack border bg-myWhite">
      <div className="w-[40%] space-y-72">
        <div className="space-y-12">
          <div className="space-y-10">
            <div className="space-y-2 headingOne">
              <h1>MEET OUR</h1>
              <h1>TEAM</h1>
            </div>
            <h4 className="paragraph">
              A COLLECTIVE, THAT MAKES DREAMS COME TRUE
            </h4>
          </div>
          <p className="paragraph pr-16">
            Our strength lies in our individuality. Set up by Esther Bryce,
            Presson's team strives to bring in the best talent in various
            fields, from architecture to interior design and sales.
          </p>
        </div>

        <Image src={rectangle} alt="" className="w-20 h-5" />
      </div>

      <div className="w-[60%] space-y-28">
        <div className="flex justify-between">
          <div className="w-[45%] h-[250px]">
            <Image
              src={CeoPhoto}
              alt=""
              className="w-full h-full object-cover"
            />
            <p className="text-base uppercase mt-2.5">Victor Ezekiel</p>
            <p className="paragraph mt-1">
              Founder - Chief Executive Officer/MD
            </p>
          </div>

          <div className="w-[45%] h-[250px]">
            <Image
              src={CeoPhoto}
              alt=""
              className="w-full h-full object-cover"
            />
            <p className="text-base uppercase mt-2.5">Victor Ezekiel</p>
            <p className="paragraph mt-1">
              Founder - Chief Executive Officer/MD
            </p>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="w-[45%] h-[250px]">
            <Image
              src={CeoPhoto}
              alt=""
              className="w-full h-full object-cover"
            />
            <p className="text-base uppercase mt-2.5">Victor Ezekiel</p>
            <p className="paragraph mt-1">
              Founder - Chief Executive Officer/MD
            </p>
          </div>

          <div className="w-[45%] h-[250px]">
            <Image
              src={CeoPhoto}
              alt=""
              className="w-full h-full object-cover"
            />
            <p className="text-base uppercase mt-2.5">Victor Ezekiel</p>
            <p className="paragraph mt-1">
              Founder - Chief Executive Officer/MD
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
