import React from 'react';
import Hero from '../../components/features/landing/hero';
import Author from '../../components/features/landing/section1';
import About from '../../components/features/landing/section2';
import Trusted from '../../components/features/landing/section3';
import Callout from '../../components/features/landing/section4';
import Learn from '../../components/features/landing/section5';
import Chapter from '../../components/features/landing/section6';
import Testimonial from '../../components/features/landing/section7';
import Blog from '../../components/features/landing/section8';
import ReadChapter from '../../components/features/landing/section9';

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Author />
      <About />
      <Trusted />
      <Callout />
      <Learn />
      <Chapter />
      <Testimonial />
      <Blog />
      <ReadChapter />
    </div>
  );
};

export default LandingPage;
