import React from 'react';
import { PiDotsThreeOutlineBold } from 'react-icons/pi';

const Footer = () => {
  const iconFooter = [
    {
      icon: '/assets/footer/iconFacebook.png',
    },
    {
      icon: '/assets/footer/iconTwitter.png',
    },
    {
      icon: '/assets/footer/iconLinkedIn.png',
    },
    {
      icon: '/assets/footer/iconInstagram.png',
    },
  ];

  return (
    <div>
      <div
        className='font-inter bg-navy-blue text-white
       xl:px-[310px] xl:pt-[80px] xl:pb-[23px]'
      >
        <div className='flex justify-between'>
          <div className='xl:mr-[110px]'>
            <div className='mb-[27px]'>
              <img
                src={`${process.env.PUBLIC_URL}/assets/navbar/logoApp.png`}
                alt='logo'
              />
            </div>
            <div className='flex gap-[10px]'>
              {iconFooter.map((item, index) => (
                <div key={index}>
                  <img
                    src={`${process.env.PUBLIC_URL}${item.icon}`}
                    alt='icon'
                  />
                </div>
              ))}
            </div>
          </div>
          <div className='xl:mr-[65px]'>
            <div className='xl:mb-[23px] font-cardo text-2xl'>Explore</div>
            <ul className='text-[#B4C7E7]'>
              <li className='flex items-center gap-[18px]'>
                <PiDotsThreeOutlineBold className='text-[#FFCA42] size-5' />
                Home
              </li>
              <li className='flex items-center gap-[18px]'>
                <PiDotsThreeOutlineBold className='text-[#FFCA42] size-5' />
                About Us
              </li>
              <li className='flex items-center gap-[18px]'>
                <PiDotsThreeOutlineBold className='text-[#FFCA42] size-5' />
                Services
              </li>
              <li className='flex items-center gap-[18px]'>
                <PiDotsThreeOutlineBold className='text-[#FFCA42] size-5' />
                Appointments
              </li>
              <li className='flex items-center gap-[18px]'>
                <PiDotsThreeOutlineBold className='text-[#FFCA42] size-5' />
                Blog
              </li>
              <li className='flex items-center gap-[18px]'>
                <PiDotsThreeOutlineBold className='text-[#FFCA42] size-5' />
                Contact Us
              </li>
            </ul>
          </div>
          <div className='xl:mr-[65px]'>
            <div className='xl:mb-[23px] font-cardo text-2xl'>
              Utility Pages
            </div>
            <ul className='text-[#B4C7E7]'>
              <li className='flex items-center gap-[18px]'>
                <PiDotsThreeOutlineBold className='text-[#FFCA42] size-5' />
                Start here
              </li>
              <li className='flex items-center gap-[18px]'>
                <PiDotsThreeOutlineBold className='text-[#FFCA42] size-5' />
                Style guide
              </li>
              <li className='flex items-center gap-[18px]'>
                <PiDotsThreeOutlineBold className='text-[#FFCA42] size-5' />
                404 not found
              </li>
              <li className='flex items-center gap-[18px]'>
                <PiDotsThreeOutlineBold className='text-[#FFCA42] size-5' />
                Password protected
              </li>
              <li className='flex items-center gap-[18px]'>
                <PiDotsThreeOutlineBold className='text-[#FFCA42] size-5' />
                Licenses
              </li>
              <li className='flex items-center gap-[18px]'>
                <PiDotsThreeOutlineBold className='text-[#FFCA42] size-5' />
                Changelog
              </li>
            </ul>
          </div>
          <div className='pl-[]'>
            <div className='xl:mb-[23px] font-cardo text-2xl'>
              Keep in Touch
            </div>
            <div className='text-lg'>
              <div className='flex justify-end'>
                <div className='font-cardo w-[90px]'>Address :</div>
                <div className='text-[#B4C7E7] '>
                  24A Kingston St, Los Vegas NC 28202, USA.
                </div>
              </div>
              <div className='flex'>
                <div className='font-cardo w-[90px]'>Mail :</div>
                <div className='text-[#B4C7E7] '>support@doctors.com</div>
              </div>
              <div className='flex'>
                <div className='font-cardo w-[90px]'>Phone :</div>
                <div className='text-[#B4C7E7] '>(+22) 123 - 4567 - 900</div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='flex justify-center border-t
        xl:mt-[77px] xl:pt-[18px]'
        >
          Drafted by RoxsRoss - Powered by 295devops
        </div>
      </div>
    </div>
  );
};

export default Footer;
