import React from 'react'
import ContactHero from '../features/contact-hero/Contact-hero'
import ContactCards from '../features/contact-contactCards/ContactCards'
import ContactForm from '../features/contact-contactForm/ContactForm'
import ScheduleCall from '../features/contact-scheduleCall/scheduleCall'
import GlobalHubs from '../features/contact-globleHubs/GlobalHubs'

const ContactUs = () => {
  return (
    <>
    <ContactHero />
    <ContactCards />
    <ContactForm />
    <ScheduleCall />
    <GlobalHubs />
    </>
  )
}

export default ContactUs