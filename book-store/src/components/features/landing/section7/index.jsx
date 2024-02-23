import React from 'react';

const Testimonial = () => {
  const testimonialData = [
    {
      image: '/assets/landing/section7/profilImage1.png',
      name: 'Martin Philips',
      rating: 4,
      title: `“ Awesome Impact ”`,
      description:
        'All the Lorem Ipsum generators on the Internet tend to repeat willings predefined chunks value.',
    },
    {
      image: '/assets/landing/section7/profilImage2.png',
      name: 'James Anderson',
      rating: 3,
      title: `“ Mind Blowing Words ”`,
      description:
        'All the Lorem Ipsum generators on the Internet tend to repeat willings predefined chunks value.',
    },
  ];

  return (
    <div
      className='font-inter 
    xl:px-[310px] xl:py-[140px] flex'
    >
      <div className='w-[418px]  flex flex-col justify-center mr-[111px]'>
        <div>
          <div className='font-bold font-cardo text-[45px] text-navy-blue mb-[27px]'>
            What Readers Say About the Book
          </div>
          <div className='border-t-[3px] border-dark-yellow w-[49px] mb-[29px]'></div>
        </div>
        <div className='text-[19px] text-thin-grey mb-[43px]'>
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators.
        </div>
        <div>
          <div className='flex items-center gap-2'>
            <div className='flex'>
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  src={`${process.env.PUBLIC_URL}/assets/landing/section7/iconDot.png`}
                  alt='icon'
                />
              ))}
            </div>
            <div> (4.8/5) </div>
          </div>
          <div className='text-[19px] text-navy-blue'>
            Overall Customer Ratings
          </div>
        </div>
      </div>
      <div className='flex gap-[31px]'>
        <div className='flex flex-col gap-[31px]'>
          {testimonialData.map((item, index) => (
            <div
              key={index}
              className='w-[370px] h-[309px] bg-navy-blue px-[31px] py-[36px] text-white'
            >
              <div className='flex gap-5 mb-[22px]'>
                <div>
                  <img
                    src={`${process.env.PUBLIC_URL}${item.image}`}
                    alt='profile'
                    className='size-[85px]'
                  />
                </div>
                <div className='flex flex-col justify-center'>
                  <div>{item.name}</div>
                  <div className='flex'>
                    {[...Array(item.rating)].map((rate, index) => (
                      <img
                        key={`rate-${index + 1}`}
                        src={`${process.env.PUBLIC_URL}/assets/landing/section7/iconDot.png`}
                        alt='icon'
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div className='font-bold font-cardo text-[22px] mb-[12px]'>
                  {item.title}
                </div>
                <div className='text-[19px] text-[#B4C7E7]'>
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* maping split */}
        <div className='h-[649px] flex flex-col justify-center'>
          <div className='flex flex-col gap-[31px]'>
            <div className='w-[370px] h-[309px] bg-navy-blue px-[31px] py-[36px] text-white'>
              <div className='flex gap-5 mb-[22px]'>
                <div>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/landing/section7/profilImage3.png`}
                    alt='profile'
                    className='size-[85px]'
                  />
                </div>
                <div className='flex flex-col justify-center'>
                  <div>Christina Louis</div>
                  <div className='flex'>
                    {[...Array(5)].map((_, index) => (
                      <img
                        key={index}
                        src={`${process.env.PUBLIC_URL}/assets/landing/section7/iconDot.png`}
                        alt='icon'
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div className='font-bold font-cardo text-[22px] mb-[12px]'>
                  “ Great Books Collections ”
                </div>
                <div className='text-[19px] text-[#B4C7E7]'>
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  willings predefined chunks value.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
