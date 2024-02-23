import React from 'react';
import TitleHero from '../../components/ui/titleHero';
import DetailBook from '../../components/features/detailProduct/section1';
import ProductDescription from '../../components/features/detailProduct/section2';
import Features from '../../components/features/detailProduct/section3';

const DetailProduct = () => {
  return (
    <div>
      <TitleHero
        titleText='My Store'
        descText='There are many variations of passages of Lorem Ipsum available,  have suffered alteration in some form.'
      />
      <DetailBook />
      <ProductDescription />
      <Features />
    </div>
  );
};

export default DetailProduct;
