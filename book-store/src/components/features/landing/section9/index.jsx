import React from 'react';
import Button from '../../../ui/button';

const ReadChapter = () => {
  return (
    <div
      className='font-inter 
    xl:px-[310px] xl:py-[145px]'
    >
      <div className='bg-dark-yellow py-[121px] px-[230px]'>
        <div className='flex flex-col items-center gap-[17px] mb-[20px]'>
          <div className='font-bold font-cardo text-navy-blue text-[45px]'>
            Read a free chapter
          </div>
          <div className='w-[55px] border-t-[3px] border-navy-blue'></div>
        </div>
        <div className='text-[19px] text-center text-navy-blue mb-[38px]'>
          Making this the first true value generator on the Internet. It of over
          200 Latin words, combined with a handful.
        </div>
        <div className='flex gap-[11px]'>
          <input
            type='text'
            placeholder='Your Email id...'
            className='w-[526px] h-[65px] py-[17px] px-[24px]'
          />
          <Button
            buttonText='Subscribe'
            className='px-[103px] h-[65px] bg-navy-blue text-white'
          />
        </div>
      </div>
    </div>
  );
};

export default ReadChapter;
