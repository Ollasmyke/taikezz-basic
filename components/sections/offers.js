/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import circlesIcon from './../../public/icons/white_circles.svg';
import Rectangle from './../../public/icons/rectangle.svg';

export default function Offers() {
  return (
    <>
      <section className="sectionDefault lg:flex gap-x-28 justify-between text-myWhite bg-secondary">
        <div className="mb-16 md:mb-20 lg:mb-0 md:w-full lg:w-[40%] flex flex-col justify-between">
          <h1 className="headingOne text-left">WHAT WE OFFER</h1>
          <Image src={Rectangle} alt="" className="rectangularBar hidden lg:flex" />
        </div>

        <div className="md:w-full lg:w-[60%] lg:flex-col space-y-14 justify-self-end">

          {/* EXPERIENCED TEAM */}
          <div className="lg:flex lg:justify-between">
            <Image src={circlesIcon} alt="" className="circleImage" />
            <div className="space-y-2 lg:w-[75%]">
              <h4 className="text-base">EXPERIENCED TEAM</h4>
              <p className="paragraph">
                We are an experienced and professional team that excels in managing construction projects, 
                procuring goods, materials, and equipment, and providing financial advice to both corporate 
                and private clients, all with a track record of satisfying our numerous customers.
              </p>
            </div>
          </div>

          {/* QUALITY TO DIE FOR */}
          <div className="lg:flex lg:justify-between">
            <Image src={circlesIcon} alt="" className="circleImage" />
            <div className="space-y-2 lg:w-[75%]">
              <h4 className="text-base">QUALITY TO DIE FOR</h4>
              <p className="paragraph">
                Our team of reliable and efficient engineers is dedicated to providing quality 
                service delivery and maximum satisfaction to our clients. We inspect and supervise 
                various types of construction projects, ensuring a perfect and high-quality finish 
                while adhering to necessary safety rules.
              </p>
            </div>
          </div>

            {/* VISIONARIES OF THE FUTURE */}
          <div className="lg:flex lg:justify-between">
            <Image src={circlesIcon} alt="" className="circleImage" />
            <div className="space-y-2 lg:w-[75%]">
              <h4 className="text-base">VISIONARIES OF THE FUTURE</h4>
              <p className="paragraph">
                Our mission is to provide high-quality services, maximizing client satisfaction. 
                We aim to be the leading consulting company, delivering exceptional results, 
                fostering fulfilling careers for our employees, and earning a fair return.
              </p>
            </div>
          </div>
        </div>
        <Image src={Rectangle} alt="" className="w-10 mt-20 flex lg:hidden" />
      </section>
    </>
  );
}
