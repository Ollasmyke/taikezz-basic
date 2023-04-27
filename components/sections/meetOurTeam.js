/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';

import CeoPhoto from './../../public/images/ceo.jpg';
import rectangle from './../../public/icons/blackRectangle.svg';

const team = [
  {
    src: '/images/ceo.jpg',
    name: 'Mr Victor Ezekiel',
    title: 'CEO/MD',
  },
  {
    src: '/images/ceo.jpg',
    name: 'Mrs Ololade',
    title: 'Finance Manager',
  },
  {
    src: '/images/ceo.jpg',
    name: 'Mr Amos',
    title: 'Personnel Manager',
  },
  {
    src: '/images/ceo.jpg',
    name: 'Another Staff',
    title: 'Procurement Manager',
  },
];

export default function MeetOurTeam() {
  return (
    <section className="sectionDefault flex-col lg:flex lg:flex-row lg:justify-between text-myBlack bg-myWhite">
      <div className="w-full lg:w-[35%] lg:flex lg:flex-col lg:justify-between">
        <div className="space-y-6">
          <h1 className="headingOne">MEET OUR TEAM</h1>
          <h4 className="paragraph">A COLLECTIVE, THAT MAKES DREAMS COME TRUE</h4>
          <p className="paragraph text-myBlack lg:mt-5">
            Our strength lies in our individuality. Set up by Esther Bryce,
            Presson's team strives to bring in the best talent in various fields,
            from architecture to interior design and sales.
          </p>
        </div>
        <Image src={rectangle} alt="" className="hidden rectangularBar" />
      </div>

      <div className="lg:w-[60%] lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-6 lg:gap-x-4 space-y-14 lg:space-y-0 mt-20 lg:m-0">
        {team.map((member, index) => (
          <div key={index} className="flex flex-col lg:items-start">
            <Image
              src={member.src}
              alt={member.name}
              width={1000}
              height={1000}
              objectFit="cover"
              className="w-full"
            />
            <p className="text-base text-myBlack uppercase mt-5 lg:mt-5">
              {member.name}
            </p>
            <p className="paragraph text-myBlack mt-1.5">{member.title}</p>
          </div>
        ))}
        <Image src={rectangle} alt="" className="lg:hidden rectangularBar" />
      </div>
    </section>
  );
}
