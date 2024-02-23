import React from 'react';
import Button from '../../../ui/button';
import { FaCircle } from 'react-icons/fa';

const Hero = () => {
  const itemHero = [
    {
      title: 'Pages',
      desc: '586pages',
    },
    {
      title: 'Length',
      desc: '10 Hours',
    },
    {
      title: 'Ratings',
      desc: '4.5/5 (305 ratings)',
    },
  ];

  return (
    <div
      className='font-inter bg-navy-blue text-white
    xl:px-[310px] xl:pb-[95px] mt-[-1px]'
    >
      <div className='flex'>
        <div className='xl:py-[141px] xl:w-[614px] xl:mr-[95px]'>
          <div className='flex items-center gap-[15px] mb-4 font-cardo italic'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/landing/hero/iconLine.png`}
              alt='icon'
            />
            Welcome to Pages
          </div>
          <div className='flex flex-col gap-[32px] xl:mb-[49px]'>
            <div className='text-[65px] font-cardo'>
              Books are uniquely portable magic
            </div>
            <div className='text-[#B4C7E7] text-[19px] font-normal'>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </div>
          </div>
          <div className='flex gap-[37px] xl:mb-[49px]'>
            <div>
              <Button
                buttonText='Order Today'
                className='text-black bg-dark-yellow'
              />
            </div>
            <div className='flex items-center underline font-cardo text-[19px]'>
              Read Free Demo
            </div>
          </div>
          <div className='flex gap-[80px] font-cardo text-xl'>
            {itemHero.map((item, index) => (
              <div key={index} className='flex gap-[13px]'>
                <FaCircle className='text-dark-yellow' />
                <div>
                  <div>{item.title}</div>
                  <div className='text-lg font-inter text-[#B4C7E7]'>
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/assets/landing/hero/imageBook.png`}
            alt='img'
            className='xl:w-[592px] h-[800px]'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
