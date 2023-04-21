import React from 'react';
import Head from 'next/head'

import Header from './header';
import Footer from './footer';

export default function layout({ title, children }) {
  return (
    <>
      <Head>
        <title>
          {title
            ? title + '- Taikez Consultancy Service'
            : 'Taikez'}
        </title>
        <meta
          name="description"
          content="Our smile, your maximum satisfaction"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="w-full">{ children }</main>
      <Footer />
    </>
  );
}
