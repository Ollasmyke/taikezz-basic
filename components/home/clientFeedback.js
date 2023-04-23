/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import circlesIcon from './../../public/icons/white_circles.svg';

export default function clientFeedback() {
  return (
    <div className="px-[160px] py-32 text-myWhite bg-secondary">
      <h1 className="headingOne">CLIENT FEEDBACK</h1>

      <div className="flex justify-between px-[100px]">
        {/* First feedback */}
        <div className="flex-col w-[35%]">
          <div>
            <Image
              src={circlesIcon}
              alt=""
              className="w-20 h-20 relative top-24 -left-[100px]"
            />
            <h4 className="mb-2">Segun Adebanjo</h4>
          </div>

          <p className="paragraph">
            We have bought and sold a handful of properties in the past with
            various different realtors, but none came close to the service we
            got at Presson's. Not only is the team full of experts who know what
            they're talking about, but they are also always willing to go that
            extra mile to ensure customer happiness and satisfaction. We were
            never left hanging and waiting for an answer – everyone got back to
            us promptly and we never felt like we weren't in the loop of what
            was going on. The whole process was smooth and we never felt rushed
            or pushed to make a decision. Instead, we could take the time to
            decide on everything, and ended up signing the papers within weeks.
          </p>
        </div>

        {/* Second feedback */}
        <div className="flex-col w-[35%]">
          <div>
            <Image
              src={circlesIcon}
              alt=""
              className="w-20 h-20 relative top-24 -left-[100px]"
            />
            <h4 className="mb-2">Segun Adebanjo</h4>
          </div>

          <p className="paragraph">
            We have bought and sold a handful of properties in the past with
            various different realtors, but none came close to the service we
            got at Presson's. Not only is the team full of experts who know what
            they're talking about, but they are also always willing to go that
            extra mile to ensure customer happiness and satisfaction. We were
            never left hanging and waiting for an answer – everyone got back to
            us promptly and we never felt like we weren't in the loop of what
            was going on. The whole process was smooth and we never felt rushed
            or pushed to make a decision. Instead, we could take the time to
            decide on everything, and ended up signing the papers within weeks.
          </p>
        </div>

      </div>
    </div>
  );
}
