import React from 'react';
import TitleHero from '../../components/ui/titleHero';
import StoreCard from '../../components/features/store/section1';
import ReadChapter from '../../components/features/landing/section9';

const StorePage = () => {
  return (
    <div>
      <TitleHero
        titleText='My Store'
        descText='There are many variations of passages of Lorem Ipsum available,  have suffered alteration in some form.'
      />
      <StoreCard />
      <ReadChapter />
    </div>
  );
};

export default StorePage;
