import React from 'react';
import Button from '../../../ui/button';

const ProductDescription = () => {
  return (
    <div
      className='font-inter 
    xl:px-[310px] xl:pb-[152px] flex flex-col items-center'
    >
      <div className='flex gap-[50px] mb-[48px]'>
        <div>
          <Button
            buttonText='Product Description'
            className='font-cardo px-[41px] py-[6px] bg-[#1B3764] text-[18px] text-white uppercase'
          />
        </div>
        <div>
          <Button
            buttonText='Additional Info'
            className='font-cardo px-[41px] py-[6px] border-[1px] border-[#E8ECF2] bg-[#F5F8FC] text-[18px] text-[#1B3764] uppercase'
          />
        </div>
      </div>
      <div className='flex gap-[92px] leading-[34.2px]'>
        <div className=''>
          <div className='mb-[11px] font-cardo font-bold text-[32px] text-navy-blue'>
            Do you offer discounts for education?
          </div>
          <div className='text-[19px] text-thin-grey'>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, bypassed
            injected humour, or randomised words which don't look even slightly
            believable.
          </div>
        </div>
        <div className=''>
          <div className='mb-[11px] font-cardo font-bold text-[32px] text-navy-blue'>
            Is this book for me?
          </div>
          <div className='text-[19px] text-thin-grey'>
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn't anything embarrassing hidden in the middle of text.
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
