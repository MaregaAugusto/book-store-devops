import React from 'react';

const About = () => {
  return (
    <div
      className='font-inter bg-[#F4F8FF]
    xl:px-[310px] xl:py-[145px]'
    >
      <div className='flex justify-center gap-[142px]'>
        <div>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/assets/landing/section2/authorImage.png`}
              alt='author'
              className='w-[550px] h-[650] shadow-2xl'
            />
          </div>
        </div>
        <div className='flex flex-col gap-[40px] w-[577px]'>
          <div>
            <div className='font-cardo text-[45px] font-bold mb-[22px]'>
              About Author
            </div>
            <div className='border-b-[3px] border-dark-yellow w-[55px]'></div>
          </div>
          <div className='text-[19px] text-thin-grey'>
            All the Lorem Ipsum generators on the Internet tend to repeated
            predefined chunks as necessary, making this the first true value
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful.
          </div>
          <div className='flex gap-8'>
            <div>
              <div className='font-cardo font-bold text-[55px] text-navy-blue'>
                02
              </div>
              <div className='text-[18px] text-thin-grey'>Books Published</div>
            </div>
            <div className='border-l-[1px] border-dark-yellow pl-[36px]'>
              <div className='font-cardo font-bold text-[55px] text-navy-blue'>
                4.5
              </div>
              <div className='text-[18px] text-thin-grey'>User Reviews</div>
            </div>
            <div className='border-l-[1px] border-dark-yellow pl-[36px]'>
              <div className='font-cardo font-bold text-[55px] text-navy-blue'>
                04
              </div>
              <div className='text-[18px] text-thin-grey'>
                Best Seller Awards
              </div>
            </div>
          </div>
          <div className='w-[485px] bg-navy-blue py-[15px] px-[18px] flex text-white gap-[37px]'>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/assets/landing/section2/imageQr.png`}
                alt='author'
                className='size-[130px]'
              />
            </div>
            <div className='flex flex-col justify-center text-[19px] text-[#B4C7E7]'>
              <div className='text-[22px] text-dark-yellow font-bold font-cardo'>
                John Abraham , Ph.d
              </div>
              <div>Mail : johnabraham@gmail.com</div>
              <div>Phone : (+2) 123 545 9000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
