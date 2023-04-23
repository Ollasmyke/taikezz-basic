import React from 'react'
import Image from 'next/image'

import WhiteLogo from './../public/logos/whiteTaikezLogo.svg'

export default function Footer() {
  return (
    <footer className="w-full h-[330px] px-[160px] py-20 flex justify-between text-myWhite bg-secondary">
      <div className="w-[30%]">
        <Image src={WhiteLogo} alt="Taikez logo" className="w-[120px] h-[120px]" />
      </div>
      <div className="w-[30%] space-y-[2px]">
        <h3 className="text-base uppercase font-medium">CONTACTS</h3>
        <p className="paragraph myDarkGray">123-456-7890</p>
        <p className="paragraph myDarkGray">info@presson.com</p>
      </div>
      <div className="w-[30%] space-y-[2px]">
        <h3 className="text-base uppercase font-medium">ADDRESS</h3>
        <p className="paragraph myDarkGray">123 your street name,</p>
        <p className="paragraph myDarkGray">City name, Country, post code </p>
      </div>
    </footer>
  )
}
