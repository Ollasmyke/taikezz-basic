/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';

import mainImage from './../../public/images/exteriorBuilding.jpg';
import underConstruction from './../../public/images/underConstruction.jpg';
import kitchen from './../../public/images/kitchen.jpg';
import livingRoom from './../../public/images/livingRoom.jpg';

import LearnMoreBtn from './../ctaButton';

export default function ProjectGallery() {
  return (
    <div className="w-full flex-col">
      <div className="w-full h-[70vh] flex justify-between">
        <Image
          src={mainImage}
          alt="building exterior"
          className="w-[79%] h-full object-cover"
        />

        <div className="w-[20%] h-full flex-col space-y-5 justify-between">
          <div className="">
            <Image
              src={underConstruction}
              alt="under construction"
              className="w-full h-[140px] object-cover"
            />
          </div>
          <div className="">
            <Image
              src={kitchen}
              alt="kitchen"
              className="w-full h-[140px] object-cover"
            />
          </div>
          <div className="">
            <Image
              src={livingRoom}
              alt="living room"
              className="w-full h-[140px] object-cover"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between pt-14">
        <div className="w-[32%] space-y-[40px] text-3xl">
            <div className="space-y-3">
                <h4 className="headingTwo">SUNSHINE BAY RESIDENCE</h4>
                <p className="paragraph">3 BEDROOM HOUSES IN BEAUTIFUL SUBURBS</p>
            </div>
          <h4 className="text-[#92A9C3]"><span className="font-bold">₦</span>‎2.000.000</h4>
        </div>

        <div className="w-[58%] space-y-14">
          <p className="paragraph">
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
