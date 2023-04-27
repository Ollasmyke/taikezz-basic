import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import CallRoundedIcon from '@mui/icons-material/CallRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';

import WhiteLogo from './../public/logos/whiteTaikezLogo.svg';

export default function Footer() {
  return (
    <footer className="sectionDefault lg:flex lg:justify-between space-y-14 lg:space-y-0 text-myWhite bg-secondary">
      <div className="lg:w-[40%] flex items-center space-x-3.5">
        <Image
          src={WhiteLogo}
          alt="Taikez logo"
          className="w-[120px] h-[120px]"
        />
        <div className="font-jost">
          <h2 className="text-[12px] md:text-[20px] font-normal text-myWhite">
            Taikez Consultancy Service
          </h2>
          <p className="text-[14px] font-light -mt-1 italic">Our smile, your maximum satisfaction</p>
          <p className="text-[14px] font-light mt-1">REGISTRATION NUMBER: 1875384</p>
        </div>
      </div>
      <div className="lg:w-[25%] flex flex-col space-y-[2px] text-myWhite">
        <h3 className="text-base uppercase font-medium mb-2">CONTACTS</h3>
        <Link className="paragraph w-fit" href="tel:09019077479">
          <CallRoundedIcon className="w-4 mr-2" />
          0901 907 7479
        </Link>
        <Link className="paragraph w-fit" href="tel:08038567604">
          <CallRoundedIcon className="w-4 mr-2" />
          0803 856 7604
        </Link>
        <Link className="paragraph w-fit" href="mailto:taikez@demdarzzy.com">
          <MailRoundedIcon className="w-4 mr-2" />
          taikez@demdarzzy.com
        </Link>
      </div>
      <div className="lg:w-[25%] space-y-[2px]">
        <h3 className="text-base uppercase font-medium mb-2">ADDRESS</h3>
        <p className="paragraph">
          <span className="font-normal">
            Head Office:
            </span> 
          21, Togedejoye Street,
          <br /> Ojokoro Village, Agric Ikorodu,{' '}
        </p>
        <p className="paragraph"> Lagos State, Nigeria, 102222 </p>
      </div>
    </footer>
  );
}
