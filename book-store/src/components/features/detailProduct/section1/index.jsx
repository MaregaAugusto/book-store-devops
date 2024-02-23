import React from 'react';
import Button from '../../../ui/button';
import { PiShoppingCartSimple } from 'react-icons/pi';

const DetailBook = () => {
  return (
    <div
      className='font-inter 
      xl:px-[310px] xl:pt-[150px] xl:pb-[120px] flex justify-center'
    >
      <div className='mr-[86px]'>
        <img
          src={`${process.env.PUBLIC_URL}/assets/store/section1/atomicBook.png`}
          alt='book'
          className='w-[580px] h-[650px]'
        />
      </div>
      <div className='w-[635px] flex flex-col justify-center'>
        <div className='font-bold font-cardo text-[32px] text-navy-blue'>
          The Atomic One’s
        </div>
        <div className='font-extrabold text-[30px] text-dark-yellow mb-[26px]'>
          $30.00 USD
        </div>
        <div className='text-thin-grey text-[19px] mb-5'>
          Making this the first true generator on the Internet. It uses a
          dictionary of over 200 Latin words, combined with a handful of model
          sentence structures, to generate Lorem Ipsum which looks reasonable.
          The generated Lorem Ipsum.
        </div>
        <div className='flex gap-5 text-thin-grey mb-[34px]'>
          <ul className='flex flex-col gap-5 text-justify'>
            <li>Publisher :</li>
            <li>Language :</li>
            <li>Paperback :</li>
            <li>ISBN-10 :</li>
            <li>Dimensions :</li>
          </ul>
          <ul className='flex flex-col gap-5'>
            <li>Learning Private Limited (1 January 2021)</li>
            <li>English</li>
            <li>212 pages</li>
            <li>9788120345799</li>
            <li>20 x 14 x 4 cm</li>
          </ul>
        </div>
        <div className='flex gap-[10px]'>
          <Button
            buttonText='1'
            className='border-[1px] border-dark-yellow text-navy-blue'
          />
          <Button
            buttonText='Add to Cart'
            className='flex items-center gap-3 bg-dark-yellow text-navy-blue'
            iconButton={<PiShoppingCartSimple />}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailBook;
