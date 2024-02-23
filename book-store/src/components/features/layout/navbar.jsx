import React from 'react';
import Button from '../../ui/button';

const Navbar = () => {
  const iconMediaSocial = [
    {
      icon: '/assets/navbar/iconFacebook.png',
    },
    {
      icon: '/assets/navbar/iconTwitter.png',
    },
    {
      icon: '/assets/navbar/iconLinkedIn.png',
    },
  ];

  return (
    <div>
      <div
        className='font-inter bg-navy-blue text-white
       xl:px-[310px] xl:pt-[40px] xl:pb-[95px] '
      >
        <div className='flex justify-between '>
          <div className='text-[28px] flex gap-[33px] items-center'>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/assets/navbar/logoApp.png`}
                alt='logo'
              />
            </div>
            <div className='flex gap-[10px]'>
              {iconMediaSocial.map((item, index) => (
                <div key={index}>
                  <img
                    src={`${process.env.PUBLIC_URL}${item.icon}`}
                    alt='icon'
                  />
                </div>
              ))}
            </div>
          </div>
          <div className='text-[17px] flex gap-[30px]'>
            <div className='flex items-center gap-[26px]'>
              <div className='flex gap-14'>
                <div className='hover:bg-dark-yellow rounded-full p-[10px] cursor-pointer'>
                  Home
                </div>
                <div className='hover:bg-dark-yellow rounded-full p-[10px] cursor-pointer'>
                  Pages
                </div>
                <div className='hover:bg-dark-yellow rounded-full p-[10px] cursor-pointer'>
                  About
                </div>
                <div className='hover:bg-dark-yellow rounded-full p-[10px] cursor-pointer'>
                  Services
                </div>
                <div className='hover:bg-dark-yellow rounded-full p-[10px] cursor-pointer'>
                  Contact
                </div>
              </div>
              <div>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/navbar/iconCart.png`}
                  alt='logo'
                />
              </div>
            </div>
            <div>
              <Button
                buttonText='Order Today'
                className='h-[65px] w-[220px] text-black text-[19px] bg-dark-yellow'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
