import React from 'react';
import { FaCircle } from 'react-icons/fa';
import Button from '../../../ui/button';

const Author = ({ className }) => {
  const authorData = [
    {
      image: '/assets/landing/section1/atomicBook.png',
      title: `Atomic One's`,
      description:
        'Many variations of passages of Lorem Ipsum willing araise alteration in some form.',
    },
    {
      image: '/assets/landing/section1/lightBook.png',
      title: 'The Dark Light',
      description:
        'Many variations of passages of Lorem Ipsum willing araise alteration in some form.',
    },
  ];

  return (
    <div className={`font-inter xl:px-[310px] xl:py-[145px] ${className}`}>
      <div className='flex flex-col items-center'>
        <div className='font-cardo font-bold text-[45px] text-navy-blue mb-[22px]'>
          Author’s Book Includes
        </div>
        <div className='border-b-[3px] w-[55px] border-dark-yellow'></div>
      </div>
      <div className='flex justify-center gap-[66px] mt-[57px]'>
        {authorData.map((item, index) => (
          <div key={index} className='w-[621px] flex gap-10'>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}${item.image}`}
                alt='book'
                className='w-[300px] h-[400px]'
              />
            </div>
            <div className='flex flex-col justify-center gap-[30px]'>
              <div>
                <div className='text-navy-blue text-[32px] font-cardo font-bold mb-[14px]'>
                  {item.title}
                </div>
                <div className='text-thin-grey text-[19px] w-[262px]'>
                  {item.description}
                </div>
              </div>
              <div className='flex justify-between'>
                <div className='flex gap-[13px]'>
                  <FaCircle className='text-dark-yellow' />
                  <div>
                    <div>Pages:</div>
                    <div className='text-lg font-inter text-[#B4C7E7]'>
                      586pages
                    </div>
                  </div>
                </div>
                <div className='flex gap-[13px]'>
                  <FaCircle className='text-dark-yellow' />
                  <div>
                    <div>Length:</div>
                    <div className='text-lg font-inter text-[#B4C7E7]'>
                      10 Hours
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Button
                  buttonText='Order Today'
                  className='border-[1px] border-dark-yellow bg-white'
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Author;
