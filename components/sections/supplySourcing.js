/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import circlesIcon from './../../public/icons/black_circles.svg';
import kitchen from './../../public/images/kitchen.jpg';

import SeeMoreBtn from './../ctaButton';

export default function SupplySourcing() {
  return (
    <section className="sectionDefault bg-lightBlue">
      <div className="flex flex-col-reverse justify-between lg:flex-row lg:items-center mb-8 lg:m-0">
        <h1 className="headingOne text-myBlack">We source supplies</h1>
        <Image src={circlesIcon} alt="" className="circleImage" />
      </div>

      <div className="lg:flex flex flex-col-reverse lg:flex-col justify-between mb-14 lg:mt-14">
        <div className="lg:flex lg:justify-between">
          <Link href="/" className="w-full lg:w-[49%]">
            <Image
              src={kitchen}
              alt=""
              className="hover:bg-blend-lighten h-full lg:h-72 object-cover"
            />
            <h3 className="text-myBlack mt-4 mb-10 lg:mb-0">BRIDGEWATER JOY RESIDENCE</h3>
          </Link>

          <Link href="/" className="w-full lg:w-[49%]">
            <Image
              src={kitchen}
              alt=""
              className="h-full lg:h-72 object-cover"
            />
            <h3 className="text-myBlack mt-4">PLEASANTVIEW GEM INN</h3>
          </Link>
        </div>
        <p className="paragraph text-myBlack mb-10 lg:mt-16 w-full lg:w-[60%]">
          Our years of experience makes us the ideal partner for your next
          project. We won't shy away from a challenge, but also know how to
          manage risks.
        </p>
      </div>

      <div className="pb-[40px] lg:p-0 lg:-mt-36">
        <SeeMoreBtn link="/about" text="SEE MORE" />
      </div>
    </section>
  );
}
