import React from 'react';

const Trusted = () => {
  const trustedData = [
    {
      logo: '/assets/landing/section3/amazenLogo.png',
      title: 'Amazen Corp',
      description: 'A long established fact that a who looking at its layout.',
      logoWidht: 'w-[95px]',
      logoHeight: 'h-[89px]',
    },
    {
      logo: '/assets/landing/section3/meganLogo.png',
      title: 'Megan Books',
      description: 'A long established fact that a who looking at its layout.',
      logoWidht: 'w-[189px]',
      logoHeight: 'h-[75px]',
    },
    {
      logo: '/assets/landing/section3/losBooksLogo.png',
      title: 'Los Books',
      description: 'A long established fact that a who looking at its layout.',
      logoWidht: 'w-[141px]',
      logoHeight: 'h-[88px]',
    },
    {
      logo: '/assets/landing/section3/urbanLibsLogo.png',
      title: 'Urban Lib',
      description: 'A long established fact that a who looking at its layout.',
      logoWidht: 'w-[100px]',
      logoHeight: 'h-[100px]',
    },
  ];

  return (
    <div
      className='font-inter 
    xl:px-[310px] xl:py-[131px]'
    >
      <div className='flex flex-col items-center mb-10'>
        <div className='text-[45px] text-navy-blue font-cardo font-bold mb-[22px]'>
          Trusted by the Best
        </div>
        <div className='w-[55px] border-b-[3px] border-dark-yellow'></div>
      </div>
      <div className='flex gap-[97px]'>
        {trustedData.map((item, index) => (
          <div key={index} className='w-[248px] flex flex-col items-center'>
            <div className='mb-[28px]'>
              <img
                src={`${process.env.PUBLIC_URL}${item.logo}`}
                alt='logo'
                className={`${item.logoHeight} ${item.logoWidht}`}
              />
            </div>
            <div className='font-bold font-cardo text-navy-blue text-2xl mb-[10px]'>
              {item.title}
            </div>
            <div className='text-thin-grey text-[18px] text-center'>
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trusted;
