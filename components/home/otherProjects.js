/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'

import circlesIcon from './../../public/icons/black_circles.svg';
import kitchen from './../../public/images/kitchen.jpg'

import SeeMoreBtn from './../ctaButton'

export default function OtherProjects() {
  return (
    <section className="px-[160px] py-32 bg-lightBlue">
      <div className="flex justify-between items-center">
        <h1 className="headingOne text-myBlack">SEE OUR OTHER PROJECTS</h1>
        <Image src={circlesIcon} alt="" className="absolute right-32 w-28 h-28" />
      </div>

      <div className="flex justify-between mt-14">
        <Link href="/" className="w-[49%]">
            <Image src={kitchen} alt="" className="hover:bg-blend-lighten h-72 object-cover" />
            <h3 className="text-myBlack mt-4">BRIDGEWATER JOY RESIDENCE</h3>
        </Link>
        <Link href="/" className="w-[49%]">
            <Image src={kitchen} alt="" className="h-72 object-cover" />
            <h3 className="text-myBlack mt-4">PLEASANTVIEW GEM INN</h3>
        </Link>
      </div>

      <div className="flex justify-between mt-16">
        <p className="paragraph text-myBlack w-[60%]">
            Our years of experience makes us the ideal partner for your next project. 
            We won't shy away from a challenge, but also know how to manage risks.
        </p>
        <SeeMoreBtn link="/about" text="SEE MORE" />
        </div>

    </section>
  );
}
