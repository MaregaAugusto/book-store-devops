import React from 'react';
import { FaCircle } from 'react-icons/fa';
import Button from '../../../ui/button';

const Chapter = () => {
  const cardItem = [
    {
      title: 'Chapter- 01   Get Started Intro',
      description:
        'Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.',
    },
    {
      title: 'Chapter- 02   Create a Massive Content',
      description:
        'Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.',
    },
    {
      title: 'Chapter- 03   Maintaining the Creative Arcs',
      description:
        'Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.',
    },
    {
      title: 'Chapter- 04   The Conclusion',
      description:
        'Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.',
    },
  ];
  return (
    <div
      className='font-inter bg-[#F4F8FF]
    xl:px-[310px] xl:py-[145px]'
    >
      <div className='flex flex-col items-center gap-[22px] mb-[50px]'>
        <div className='font-bold font-cardo text-navy-blue text-[45px]'>
          The Chapter Includes
        </div>
        <div className='w-[55px] border-t-[3px] border-dark-yellow'></div>
      </div>
      <div className='grid grid-cols-2 gap-[40px] mb-[79px]'>
        {cardItem.map((item, index) => (
          <div
            key={index}
            className='w-[630px] h-[250px] shadow-lg px-[54px] pt-[48px] bg-white'
          >
            <div className='font-bold font-cardo text-navy-blue text-2xl mb-[14px]'>
              {item.title}
            </div>
            <div className='text-[19px] text-thin-grey mb-[25px]'>
              {item.description}
            </div>
            <div className='flex justify-between'>
              <div className='flex items-center'>
                <FaCircle className='text-dark-yellow mr-[13px]' />{' '}
                <div className='font-cardo font-bold text-[22px] text-navy-blue'>
                  Pages :
                </div>
                <div className='text-thin-grey text-[18px]'> 85pages</div>
              </div>
              <div className='flex items-center'>
                <FaCircle className='text-dark-yellow mr-[13px]' />{' '}
                <div className='font-cardo font-bold text-[22px] text-navy-blue'>
                  Length :
                </div>
                <div className='text-thin-grey text-[18px]'>
                  {' '}
                  1 Hour 15 Mins
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex flex-col items-center gap-[32px]'>
        <div>
          <Button
            buttonText='Start a 15-Days Free Trail'
            className='text-navy-blue font-cardo font-bold text-[19px] bg-dark-yellow'
          />
        </div>
        <div className='text-thin-grey w-[318px] text-center'>
          Short description about each chapter{' '}
          <a href='a' className='underline text-navy-blue'>
            Have any questions?
          </a>
          Contact us
        </div>
      </div>
    </div>
  );
};

export default Chapter;
