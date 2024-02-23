import React from 'react';

const Learn = () => {
  const cardData = [
    {
      number: '01',
      description:
        'Use HDFS & Map Reduce for storing & analyzing data at scale.',
    },
    {
      number: '02',
      description:
        'Consume streaming data using Spark Streaming, Flink, and Storm.',
    },
    {
      number: '03',
      description:
        'Choose an appropriate data storage technology for your application',
    },
    {
      number: '04',
      description:
        'Analyze non-relational data using HBase, Cassandra, and MongoDB.',
    },
  ];

  return (
    <div
      className='font-inter 
    xl:px-[310px] xl:py-[145px]'
    >
      <div className='flex flex-col items-center gap-[22px] mb-[53px]'>
        <div className='font-bold font-cardo text-[45px] text-navy-blue'>
          What will you learn?
        </div>
        <div className='border-t-[3px] border-dark-yellow w-[55px]'></div>
      </div>
      <div className='flex gap-[99px]'>
        <div className='grid grid-cols-2 gap-[30px] py-[30px]'>
          {cardData.map((item, index) => (
            <div
              key={index}
              className='size-[290px] px-[33px] py-[41px] bg-[#F4F8FF] font-bold font-cardo text-2xl text-navy-blue'
            >
              <div className='flex justify-center items-center rounded-full bg-dark-yellow size-[50px] mb-[31px]'>
                {item.number}
              </div>
              <div className=''>{item.description}</div>
            </div>
          ))}
        </div>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/assets/landing/section5/imageReadingBook.png`}
            alt='img'
            className='w-[550px] h-[650px]'
          />
        </div>
      </div>
    </div>
  );
};

export default Learn;
