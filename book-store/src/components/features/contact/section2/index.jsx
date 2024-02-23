import React from 'react';

const Faq = () => {
  return (
    <div
      className='font-inter 
    xl:px-[310px] xl:pt-[111px] xl:pb-[130px] bg-[#F5F8FC]'
    >
      <div className='flex flex-col items-center'>
        <div className='font-bold font-cardo text-[45px] text-navy-blue'>
          Frequent Questions?
        </div>
        <div className='w-[55px] border-t-[3px] border-dark-yellow mb-[27px]'></div>
      </div>
      <div className='flex '>
        <div>left</div>
        <div>right</div>
      </div>
    </div>
  );
};

export default Faq;
