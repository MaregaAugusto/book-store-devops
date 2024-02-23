import React from 'react';
import TitleHero from '../../components/ui/titleHero';
import ContactUs from '../../components/features/contact/section1';
import Faq from '../../components/features/contact/section2';

const ContactPage = () => {
  return (
    <div>
      <TitleHero
        titleText='Contact Us'
        descText='There are many variations of passages of Lorem Ipsum available,  have suffered alteration in some form.'
      />
      <ContactUs />
      <Faq />
    </div>
  );
};

export default ContactPage;
