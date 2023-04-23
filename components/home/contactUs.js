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
    <>
      <section className="w-full px-[160px] py-32 flex  justify-between text-myBlack bg-myWhite">
        <div className="w-[30%]">
          <div className="space-y-[50%]">
            <div className="space-y-8">
              <div className="space-y-2 uppercase headingOne">
                <h1>Contact</h1>
                <h1>Us</h1>
              </div>
              <p className="paragraph myDarkGray">
                If you're interested in hearing more about the way we work, have
                a business proposal, or are interested in making a purchase,
                we'd love to hear from you.
              </p>
            </div>
            <div className="w-full">
              <Image src={rectangle} alt="" className="w-20 h-5" />
            </div>
          </div>
        </div>

          <Box
            component="form"
            sx={{
              width: 500,
              maxWidth: '100%',
            }}
            noValidate
            autoComplete="off"
            className="space-y-8"
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
    </>
  );
}
