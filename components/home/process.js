/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import circlesIcon from './../../public/icons/white_circles.svg';
import rectangle from './../../public/icons/blackRectangle.svg';

export default function Process() {
  return (
    <>
      <section className="w-full px-[160px] py-32 flex gap-x-28 justify-between text-myBlack bg-lightBlue">
        <div className="w-[40%]">
          <div className="space-y-[100%]">
            <div className="space-y-2 mt-8 headingOne">
              <h1>PROCESS</h1>
              <h1>OF BUYING</h1>
            </div>
            <div className="w-full">
              <Image src={rectangle} alt="" className="w-20 h-5" />
            </div>
          </div>
        </div>

        <div className="w-[50%] flex-col space-y-14">
          {/* HOUSE VIEWING */}
          <div className="flex items-center justify-start space-x-12">
            <h1 className="text-[100px]">1</h1>
            <div className="space-y-2">
              <h4 className="text-base">HOUSE VIEWING</h4>
              <p className="paragraph">
                We are here to help you find the perfect place for your family.
                Depending on your needs, we'll suggest properties to view and
                book you in for your viewing.
              </p>
            </div>
          </div>

          {/* NEGOTIATING TERMS */}
          <div className="flex items-center justify-start space-x-12">
            <h1 className="text-[100px]">2</h1>
            <div className="space-y-2">
              <h4 className="text-base">NEGOTIATING TERMS</h4>
              <p className="paragraph">
                We pay a lot of attention to each and every detail, because we
                know that we are in charge of creating somebody's safe haven. We
                partner up with the best craftsmen to ensure our famed quality.
              </p>
            </div>
          </div>

          {/* CLOSE CARE-FREE */}
          <div className="flex items-center justify-start space-x-12">
            <h1 className="text-[100px]">3</h1>
            <div className="space-y-2">
              <h4 className="text-base">CLOSE CARE-FREE</h4>
              <p className="paragraph">
                We don't play around – that means that our bold and confident
                approach to closing results in you walking away with the keys to
                your new dream property.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
