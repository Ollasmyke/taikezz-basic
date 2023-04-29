/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';

import CeoPhoto from './../../public/images/ceo.jpg';
import BlackRectangle from './../../public/icons/blackRectangle.svg';

const team = [
  {
    src: '/images/ceo.jpg',
    name: 'Mr Victor Ezekiel',
    title: 'CEO/MD',
  },
  {
    src: '/images/ceo.jpg',
    name: 'Mrs Ololade',
    title: 'Financial Controller',
  },
  {
    src: '/images/ceo.jpg',
    name: 'Mr Amos',
    title: 'Quality Assurance Manager',
  },
  {
    src: '/images/ceo.jpg',
    name: 'Another Staff',
    title: 'Project and Operational Manager',
  },
];

export default function MeetOurTeam() {
  return (
    <section className="sectionDefault flex-col lg:flex lg:flex-row lg:justify-between text-myBlack bg-myWhite">
      <div className="w-full lg:w-[35%] lg:flex lg:flex-col lg:justify-between">
        <div className="space-y-6">
          <h1 className="headingOne">MEET OUR TEAM</h1>
          <p className="paragraphBold font-medium text-myBlack lg:mt-5">
            TAIKEZ CONSULTANCY boasts a highly qualified team of professionals, 
            from our MD/CEO to our board of Directors, Quality Assurance Manager, 
            Project and Operational Manager, Auditor, Financial Controller, Human 
            Resource Manager, General Manager of Customer Service and Logistics, 
            legal team, and motivated staff. We are committed to meeting your needs 
            with respect, honesty, and dignity, delivering on our reputation as a 
            respected consultancy company.
          </p>
        </div>
        <Image src={BlackRectangle} alt="" className="hidden rectangularBar" />
      </div>

      <div className="lg:w-[60%] lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-6 lg:gap-x-4 space-y-14 lg:space-y-0 mt-20 lg:m-0">
        {team.map((member, index) => (
          <div key={index} className="flex flex-col lg:items-start">
            <Image
              src={member.src}
              alt={member.name}
              width={1000}
              height={1000}
              className="w-full object-cover"
            />
            <p className="text-base text-myBlack uppercase mt-5 lg:mt-5">
              {member.name}
            </p>
            <p className="paragraphBold text-myBlack mt-1">{member.title}</p>
          </div>
        ))}
        <Image
          src={BlackRectangle}
          alt=""
          className="lg:hidden rectangularBar"
        />
      </div>
    </section>
  );
}
