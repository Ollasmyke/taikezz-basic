/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import SendBtn from './../ctaButton';

import circlesIcon from './../../public/icons/white_circles.svg';
import rectangle from './../../public/icons/blackRectangle.svg';
import demdarzzy from './../../public/icons/demdarzzy.svg';

export default function ContactUs() {
  return (
    <section className="sectionDefault lg:flex lg:justify-between lg:space-y-0 text-myBlack bg-myWhite">
      <div className="w-full lg:w-[35%] lg:flex-col lg:flex lg:justify-between space-y-14 lg:space-y-0">
        <div className="space-y-6">
          <h1 className="uppercase headingOne">Contact Us</h1>
          <p className="paragraph text-myBlack">
            If you're interested in hearing more about the way we work, have
            a business proposal, or are interested in making a purchase,
            we'd love to hear from you.
          </p>
        </div>
        <Image src={rectangle} alt="" className="rectangularBar" />
      </div>

      <Box
        component="form"
        sx={{
          width: 500,
          maxWidth: '100%',
        }}
        noValidate
        autoComplete="off"
        className="space-y-8 my-16 lg:my-0"
      >
        <TextField
          fullWidth
          id="standard-basic"
          label="First name"
          variant="standard"
        />
        <TextField
          fullWidth
          id="standard-basic"
          label="Last name"
          variant="standard"
        />
        <TextField
          fullWidth
          id="standard-basic"
          label="Your email"
          variant="standard"
        />
        <TextField
          fullWidth
          id="standard-multiline-static"
          label="Enter your message"
          multiline
          rows={4}
          variant="standard"
        />
        <SendBtn link="/" text="SEND" />
      </Box>
    </section>
  );
}
