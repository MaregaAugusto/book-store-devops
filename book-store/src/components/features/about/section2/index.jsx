import React from 'react';

const History = () => {
  const storyData = [
    {
      number: '01',
      title: 'Great Author Awards - 1996 & 2000',
      description:
        'How to navigate around the interface and toggle on/off the panels you wish to use.',
    },
    {
      number: '02',
      title: '10 Times New York Times ® Best Seller',
      description:
        'How to navigate around the interface and toggle on/off the panels you wish to use.',
    },
    {
      number: '03',
      title: 'Writer of Hack Productivity ',
      description:
        'How to navigate around the interface and toggle on/off the panels you wish to use.',
    },
  ];
  return (
    <div
      className='font-inter 
    xl:px-[310px] xl:py-[151px] flex gap-[100px]'
    >
      <div className='w-[599px] flex flex-col justify-center'>
        <div>
          <div className='font-bold font-cardo text-[45px] text-navy-blue mb-[22px]'>
            My Story
          </div>
          <div className='w-[55px] border-t-[3px] border-dark-yellow mb-[27px]'></div>
        </div>
        <div className='w-[554px] text-[19px] text-thin-grey mb-[22px]'>
          Making this the first true generator on the Internet. It uses a
          dictionary of over 200 Latin words, combined with a handful of model
          sentence structures.
        </div>
        <div className='pl-[45px] flex flex-col gap-[35px]'>
          {storyData.map((item, index) => (
            <div key={index} className='flex gap-[48px]'>
              <div className='flex justify-center items-center size-[65px] bg-dark-yellow font-cardo font-bold text-[30px] text-navy-blue'>
                {item.number}
              </div>
              <div>
                <div className='text-2xl font-bold font-cardo text-navy-blue'>
                  {item.title}
                </div>
                <div className='text-[19px] text-thin-grey'>
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/assets/about/section2/imageStory.png`}
          alt='img'
          className='w-[600px] h-[650px]'
        />
      </div>
    </div>
  );
};

export default History;
