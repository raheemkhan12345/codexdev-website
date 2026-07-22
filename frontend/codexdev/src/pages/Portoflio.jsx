import React from 'react'
import Hero from '../features/portfolio-hero/Hero'
import PortfolioGrid from '../features/portfolio-ProjectGrid/portfolioGrid'
import ContactBanner from '../features/home-ContactBanner/ContactBanner'


const Portoflio = () => {
  return (
    <>
    <Hero />
    <PortfolioGrid />
    <ContactBanner
        title="Have a vision for your next project?"
        subtitle="Let's combine our executive engineering expertise with your industry insights to
        build something extraordinary."
        primaryBtnText="Start Your Project"
        secondaryBtnText="View Our Process"
        variant="about"
      />
    
    </>
  )
}

export default Portoflio