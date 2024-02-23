import React from 'react';

const Features = () => {
  const featuresData = [
    {
      image: '/assets/detailProduct/section3/iconCheck.png',
      title: 'Secure Payments',
      description:
        'There are many variations of passages of alteration in some form.',
    },
    {
      image: '/assets/detailProduct/section3/iconCube.png',
      title: 'Free Shipping',
      description:
        'There are many variations of passages of alteration in some form.',
    },
    {
      image: '/assets/detailProduct/section3/iconLightning.png',
      title: '100% Satisfactions',
      description:
        'There are many variations of passages of alteration in some form.',
    },
  ];
  return (
    <div
      className='font-inter 
      xl:px-[310px] xl:py-[85px] bg-dark-yellow flex justify-center gap-[90px]'
    >
      {featuresData.map((item, index) => (
        <div
          key={index}
          className='w-[365px] flex flex-col items-center text-navy-blue'
        >
          <div className='flex items-center justify-center size-20 bg-navy-blue mb-[19px]'>
            <img
              src={`${process.env.PUBLIC_URL}${item.image}`}
              alt='img'
              className='size-9'
            />
          </div>
          <div className='font-cardo font-bold text-[32px]'>{item.title}</div>
          <div className='text-center text-[19px]'>{item.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Features;
