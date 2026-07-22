import React from 'react'
import CareersHero from '../features/careers-careersHero/Careers-hero'
import WhyJoinUs from '../features/careers-whyJoinUs/WhyJoinUs'
import LifeAtCodexDev from '../features/careers-LifeAtCodexDev/LifeAtCodexDev'
import CoreValues from '../features/careers-CoreValues/CoreValues'
import OpenPositions from '../features/careers-OpenPositions/OpenPositions'
import HiringJourney from '../features/careers-HiringJourney/HiringJourney'
import GlobalHubs from '../features/careers-GlobalHubs/GlobalHubs'
import ContactBanner from '../features/home-ContactBanner/ContactBanner'

const Careers = () => {
    return (
        <>
            <CareersHero />
            <WhyJoinUs />
            <LifeAtCodexDev />
            <CoreValues />
            <OpenPositions />
            <HiringJourney />
            <GlobalHubs />
            <ContactBanner
                title="Your Next Career Starts Here"
                subtitle="Help us build the next generation of digital infrastructure. Let's create
                something extraordinary together."
                primaryBtnText="Join the Team"
                secondaryBtnText="Talk to a Recruiter"
                variant="about"
            />

        </>
    )
}

export default Careers