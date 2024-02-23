import React from 'react';
import TitleHero from '../../components/ui/titleHero';
import AboutAuthor from '../../components/features/about/section1';
import History from '../../components/features/about/section2';
import Author from '../../components/features/landing/section1';
import Trusted from '../../components/features/landing/section3';
import ReadChapter from '../../components/features/landing/section9';

const AboutPage = () => {
  return (
    <div>
      <TitleHero
        titleText='About the Author'
        descText='There are many variations of passages of Lorem Ipsum available,  have suffered alteration in some form.'
      />
      <AboutAuthor />
      <History />
      <Author className='bg-[#F5F8FC]' />
      <Trusted />
      <ReadChapter />
    </div>
  );
};

export default AboutPage;
