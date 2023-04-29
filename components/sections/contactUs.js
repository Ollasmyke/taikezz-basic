/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import BlackRectangle from '../../public/icons/blackRectangle.svg';

import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export default function ContactUs() {
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorsObj = {};

    if (name.trim() === '') {
      errorsObj.name = 'Name is required';
    }
    if (companyName.trim() === '') {
      errorsObj.companyName = 'Company name is required';
    }
    if (!validateEmail(email)) {
      errorsObj.email = 'Invalid email format';
    }
    if (message.trim() === '') {
      errorsObj.message = 'Message is required';
    }

    if (Object.keys(errorsObj).length > 0) {
      setErrors(errorsObj);
      setAlertOpen(false); // hide the alert if it's open
    } else {
      const data = {
        name,
        companyName,
        email,
        message,
      };
      // Send email logic here
      console.log(data);
      // Display success message
      setAlertOpen(true);
      setName('');
      setCompanyName('');
      setEmail('');
      setMessage('');
      setErrors({});
    }
  };

  // Add a state to control the visibility of the alert
  const [alertOpen, setAlertOpen] = useState(false);

  // Add the alert component inside the return statement
  return (
    <section className="sectionDefault lg:flex lg:justify-between lg:space-y-0 text-myBlack bg-myWhite">
      <div className="w-full lg:w-[35%] lg:flex-col lg:flex lg:justify-between space-y-14 lg:space-y-0">
        <div className="space-y-6">
          <h1 className="uppercase headingOne">Contact Us</h1>
          <p className="paragraph text-myBlack">
            If you're interested in hearing more about the way we work, have a
            business proposal, or are interested in making a purchase, we'd love
            to hear from you.
          </p>
        </div>
        <Image src={BlackRectangle} alt="" className="rectangularBar" />
      </div>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: 500,
          maxWidth: '100%',
        }}
        noValidate
        autoComplete="off"
        className="space-y-8 my-16 lg:my-0"
      >
        <TextField
          required
          fullWidth
          id="name"
          label="Name"
          variant="standard"
          value={name}
          error={!!errors.name}
          helperText={errors.name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          required
          fullWidth
          id="companyName"
          label="Company name"
          variant="standard"
          value={companyName}
          error={!!errors.companyName}
          helperText={errors.companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <TextField
          required
          fullWidth
          id="email"
          label="Your email"
          variant="standard"
          value={email}
          error={!!errors.email}
          helperText={errors.email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          required
          fullWidth
          id="message"
          label="Message"
          variant="standard"
          value={message}
          error={!!errors.message}
          helperText={errors.message}
          multiline
          rows={4}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          className="ctaBtn rounded-none"
          variant="contained"
          disabled={!name || !companyName || !email || !message}
          onClick={handleSubmit}
        >
          Send
        </Button>
      </Box>
      {/* Add the alert component */}
      <Alert
        open={alertOpen}
        onClose={() => setAlertOpen(false)}
        severity="success"
        className="fixed bottom-10 left-10 rounded-md inset-x-0 w-fit"
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setAlertOpen(false);
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ mb: 2 }}
      >
        <AlertTitle>Success</AlertTitle>
        Your message has been sent successfully. <br />
        We will get back to you soon!
      </Alert>
    </section>
  );
}
