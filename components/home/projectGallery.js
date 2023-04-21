/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';

import mainImage from './../../public/images/exteriorBuilding.jpg';

export default function projectGallery() {
  return (
    <div className="w-full flex-col">
      <div className="w-full h-[70vh] flex justify-between border border-red-500">
        <Image
          src={mainImage}
          alt="building exterior"
          className="w-[79%] h-full object-cover"
        />

        <div className="w-[20%] h-full flex-col space-y-3 justify-between border border-red-500">
          <div className="border border-red-500">
            <Image
              src={mainImage}
              alt="building exterior"
              className="w-full h-[120px] object-cover"
            />
          </div>
          <div className="border border-red-500">
            <Image
              src={mainImage}
              alt="building exterior"
              className="w-full h-[120px] object-cover"
            />
          </div>
          <div className="border border-red-500">
            <Image
              src={mainImage}
              alt="building exterior"
              className="w-full h-[120px] object-cover"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between pt-14">
        <div className="w-[32%] space-y-20 text-3xl">
            <div className="space-y-3">
                <h4 className="headingTwo">SUNSHINE BAY RESIDENCE</h4>
                <p className="paragraph">3 BEDROOM HOUSES IN BEAUTIFUL SUBURBS</p>
            </div>
          <h4 className="text-[#92A9C3]"><span className="font-bold">₦</span>‎2.000.000</h4>
        </div>

        <div className="w-[58%] space-y-10">
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

          <button className="float-right text-[12px] px-16 py-3 text-myWhite bg-secondary hover:bg-blue-900">LEARN MORE</button>
        </div>
      </div>
    </div>
  );
}
