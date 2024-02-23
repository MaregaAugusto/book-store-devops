import React from 'react';
import { FiEdit, FiMail, FiPhone, FiUser } from 'react-icons/fi';
import Button from '../../../ui/button';

const ContactUs = () => {
  const contactData = [
    {
      image: '/assets/contact/section1/iconHome.png',
      title: 'Visit Us',
      description: 'No: 09a, Downtown, San Dieago, USA.',
    },
    {
      image: '/assets/contact/section1/iconMail.png',
      title: 'Drop Us',
      description: 'support@pages.com',
    },
    {
      image: '/assets/contact/section1/iconTelephone.png',
      title: 'Call Us',
      description: 'Call: 1-800-123-9999',
    },
  ];
  return (
    <div
      className='font-inter 
      xl:px-[310px] xl:pt-[111px] xl:pb-[130px] flex justify-center'
    >
      <div className='w-[523px] mr-[106px]'>
        <div>
          <div className='font-bold font-cardo text-[45px] text-navy-blue'>
            Keep in Touch
          </div>
          <div className='w-[55px] border-t-[3px] border-dark-yellow mb-[27px]'></div>
        </div>
        <div className='text-thin-grey text-[19px] mb-10'>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </div>
        <div className='flex flex-col gap-[18px]'>
          {contactData.map((item, index) => (
            <div key={index} className='flex items-center gap-[27px]'>
              <div>
                <img
                  src={`${process.env.PUBLIC_URL}${item.image}`}
                  alt='icon'
                />
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
      <div className='w-[606px]'>
        <div className='flex gap-2 mb-[15px]'>
          <div className='relative'>
            <input
              type='text'
              placeholder='Name'
              className='border-[1px] border-[#DCE1E9] pl-[59px] pr-[21px] py-[15px] w-[299px]'
            />
            <FiUser className='absolute transform -translate-y-1/2 top-1/2 left-5 size-6 text-dark-yellow' />
          </div>
          <div className='relative'>
            <input
              type='text'
              placeholder='Email'
              className='border-[1px] border-[#DCE1E9] pl-[59px] pr-[21px] py-[15px] w-[299px]'
            />
            <FiMail className='absolute transform -translate-y-1/2 top-1/2 left-5 size-6 text-dark-yellow' />
          </div>
        </div>
        <div className='relative mb-[15px]'>
          <input
            type='text'
            placeholder='Phone'
            className='border-[1px] border-[#DCE1E9] pl-[59px] pr-[21px] py-[15px] w-full'
          />
          <FiPhone className='absolute transform -translate-y-1/2 top-1/2 left-5 size-6 text-dark-yellow' />
        </div>
        <div className='relative mb-[15px]'>
          <textarea
            type='text'
            placeholder='Message'
            className='border-[1px] border-[#DCE1E9] pl-[59px] pr-[21px] py-[15px] w-full h-[220px]'
          />
          <FiEdit className='absolute transform -translate-y-1/2 top-7 left-5 size-6 text-dark-yellow' />
        </div>
        <label className='text-thin-grey text-[18px] '>
          <input type='checkbox' className='mr-[14px]' />
          Keep me up to date with news and offers from time to time by email
        </label>
        <div>
          <Button
            buttonText='Send Message'
            className='w-full bg-dark-yellow mt-[40px]'
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
