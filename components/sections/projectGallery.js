/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';

import mainImage from './../../public/images/house.jpg';
import underConstruction from './../../public/images/interiorDecor.jpg';
import kitchen from './../../public/images/kitchen.jpg';
import livingRoom from './../../public/images/slideThree.jpg';

import LearnMoreBtn from './../ctaButton';

export default function ProjectGallery() {
  return (
    <div className="w-full flex-col pb-[40px] lg:p-0">
      <div className="w-full lg:h-[70vh] flex-col lg:flex lg:flex-row justify-between">
        <Image
          src={mainImage}
          alt="building exterior"
          className="w-full lg:w-[79%] mb-6 h-full object-cover"
        />

        <div className="flex-col w-full lg:w-[20%] h-full lg:flex-col space-y-6 lg:space-y-5 lg:justify-between">
          <Image
            src={underConstruction}
            alt="under construction"
            className="w-full lg:h-[140px] object-cover"
          />
          <Image
            src={kitchen}
            alt="kitchen"
            className="w-full lg:h-[140px] object-cover"
          />
          <Image
            src={livingRoom}
            alt="living room"
            className="w-full lg:h-[140px] object-cover"
          />
        </div>
      </div>

      <div className="w-full flex-col lg:flex lg:flex-row justify-between pt-14">
        <div className="w-full lg:w-[32%] space-y-[20px] lg:space-y-[40px] text-3xl">
          <div className="space-y-3">
            <h4 className="headingTwo">SUNSHINE BAY RESIDENCE</h4>
            <p className="paragraph">3 BEDROOM HOUSES IN BEAUTIFUL SUBURBS</p>
          </div>
          <h4 className="text-[#92A9C3]">
            <span className="font-bold">₦</span>‎2.000.000
          </h4>
        </div>

        <div className="w-full lg:w-[58%] lg:space-y-14">
          <p className="paragraph mt-14 mb-10 lg:m-0">
            Equipped with air conditioning, private pool, 3 on-suite bedrooms
            and a spacious open living room kitchen area, Sunshine Bay
            Residences are an excellent choice for anyone dreaming of their own
            safe haven. Located in a peaceful, child-friendly neighborhood,
            Sunshine Bay has all the amenities that you could expect from a
            suburb voted 'best in the state' for 3 running years. Whether you
            want to play soccer with your kids on the lawn, or invite friends
            over for dinner, there's space for it at Sunshine Bay.
          </p>

          <LearnMoreBtn link="/" text="LEARN MORE" />
        </div>
      </div>
    </div>
  );
}
