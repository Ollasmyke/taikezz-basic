/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import circlesIcon from './../../public/icons/white_circles.svg';

export default function ClientFeedback() {
  return (
    <div className="sectionDefault space-y-12 lg:space-y-6 text-myWhite bg-secondary">
      <h1 className="headingOne lg:m-0">CLIENT FEEDBACK</h1>

      <div className="lg:flex lg:flex-row items-baseline lg:space-x-8 space-y-16 flex flex-col justify-between">
        {/* First feedback */}
        <div className="clientFeedbackWrapper">
          <Image src={circlesIcon} alt="" className="circleImage" />

          <div className="lg:w-[60%]">
            <h4 className="mb-2">Segun Adebanjo</h4>
            <p className="paragraph">
              We have bought and sold a handful of properties in the past with
              various different realtors, but none came close to the service we
              got at Taikez. Not only is the team full of experts who know what
              they're talking about, but they are also always willing to go that
              extra mile to ensure customer happiness and satisfaction. We were
              never left hanging and waiting for an answer – everyone got back
              to us promptly and we never felt like we weren't in the loop of
              what was going on. The whole process was smooth and we never felt
              rushed or pushed to make a decision. Instead, we could take the
              time to decide on everything, and ended up signing the papers
              within weeks.
            </p>
          </div>
        </div>

        {/* Second feedback */}
        <div className="clientFeedbackWrapper">
          <Image src={circlesIcon} alt="" className="circleImage" />

          <div className="lg:w-[60%]">
            <h4 className="mb-2">Segun Adebanjo</h4>
            <p className="paragraph">
              We have bought and sold a handful of properties in the past with
              various different realtors, but none came close to the service we
              got at Taikez. Not only is the team full of experts who know what
              they're talking about, but they are also always willing to go that
              extra mile to ensure customer happiness and satisfaction. We were
              never left hanging and waiting for an answer – everyone got back
              to us promptly and we never felt like we weren't in the loop of
              what was going on. The whole process was smooth and we never felt
              rushed or pushed to make a decision. Instead, we could take the
              time to decide on everything, and ended up signing the papers
              within weeks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
