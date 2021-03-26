import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description }) => {
  return (
    <Head>
      <meta charSet='utf-8' />
      <title>{title}</title>
      <meta name='description' content={description} />
    </Head>
  );
};
