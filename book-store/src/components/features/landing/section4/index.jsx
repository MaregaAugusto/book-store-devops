import React from 'react';
import Button from '../../../ui/button';

const Callout = () => {
  return (
    <div
      className='font-inter bg-navy-blue text-white
    xl:px-[310px] xl:py-[37px]'
    >
      <div className='flex justify-center'>
        <div className='flex flex-col justify-center gap w-[567px]'>
          <div>
            <div className='font-cardo text-[45px] font-bold mb-[22px]'>
              Get Book Copy Today!
            </div>
            <div className='border-b-[3px] w-[55px] border-dark-yellow mb-[22px]'></div>
          </div>
          <div className='text-[19px] text-[#B4C7E7] mb-[31px]'>
            This the first true value generator on the Internet. It uses alphas
            dictionary of over 200 Latin words.
          </div>
          <div>
            <Button
              buttonText='Oreder Today'
              className='border-[1px] border-dark-yellow bg-transparent '
            />
          </div>
        </div>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/assets/landing/section4/imageBook.png`}
            alt='img'
            className='w-[640px] h-[427px]'
          />
        </div>
      </div>
    </div>
  );
};

export default Callout;
