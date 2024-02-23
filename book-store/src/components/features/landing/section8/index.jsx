import React from 'react';

const Blog = () => {
  const blogData = [
    {
      image: '/assets/landing/section8/articleImage1.png',
      title: 'The energy efficiency offers hydrotherapy or swim',
      description:
        'The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.',
    },
    {
      image: '/assets/landing/section8/articleImage2.png',
      title: 'Release of Letraset sheets tools containing  passages',
      description:
        'The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.',
    },
    {
      image: '/assets/landing/section8/articleImage3.png',
      title: 'The energy efficiency offers hydrotherapy or swim',
      description:
        'The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.',
    },
  ];

  return (
    <div
      className='font-inter bg-[#F4F8FF]
    xl:px-[310px] xl:py-[145px]'
    >
      <div className='flex flex-col items-center gap-[22px] mb-[50px]'>
        <div className='font-bold font-cardo text-navy-blue text-[45px]'>
          Articles & Resources
        </div>
        <div className='w-[55px] border-t-[3px] border-dark-yellow'></div>
      </div>
      <div className='flex gap-[35px]'>
        {blogData.map((item, index) => (
          <div key={index} className='w-[410px] shadow-lg'>
            <div className='mb-[27px]'>
              <img
                src={`${process.env.PUBLIC_URL}${item.image}`}
                alt='img'
                className='w-[410px] h-[326px]'
              />
            </div>
            <div className='px-[31px] py-[27px]'>
              <div className='text-2xl text-navy-blue font-bold font-cardo mb-[14px]'>
                {item.title}
              </div>
              <div className='text-[19px] text-thin-grey mb-[27px]'>
                {item.description}
              </div>
              <div className='flex justify-between'>
                <div className='text-2xl font-bold underline text-navy-blue font-cardo'>
                  Read more
                </div>
                <div className='text-[17px] text-navy-blue'>
                  Author - 23.05.2022
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
