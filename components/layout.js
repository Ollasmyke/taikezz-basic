import React from 'react';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import Header from './header';
import Footer from './footer';
import ScrollToTopButton from '../components/scrollToTopButton';

export default function Layout({ title, children }) {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>
          {title ? title + '- Taikez Consultancy Service' : 'Taikez'}
        </title>
        <meta
          name="description"
          content="Our smile, your maximum satisfaction"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="w-full">{children}</main>
      <Footer />

      <ScrollToTopButton isVisible={isScrolled} />
    </>
  );
}
