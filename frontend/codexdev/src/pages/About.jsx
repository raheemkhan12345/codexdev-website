import React from 'react'
import AboutHero from '../features/about-hero/AboutHero'
import OurStory from '../features/about-ourStory/OurStory'
import MissionVision from '../features/about-missionVision/MissionVision'
import TechPhilosophy from '../features/about-techPhilosophy/TechPhilosophy'
import TeamShowcase from '../features/about-teamShowcase/TeamShowcase'
import LifeAtCodexdev from '../features/about-lifeAtCodexdev/LifeAtCodexDev'
import TechPartners from '../features/about-TechPartner/TechPartners'
import ContactBanner from '../features/home-ContactBanner/ContactBanner'

const About = () => {
    return (
        <>
            <AboutHero />
            <OurStory />
            <MissionVision />
            <TechPhilosophy />
            <TeamShowcase />
            <LifeAtCodexdev />
            <TechPartners />


            <ContactBanner
                title="Ready to Build Your Next Digital Product?"
                subtitle="Let's discuss how our executive engineering team can bring your vision to life with precision and scale."
                primaryBtnText="Get in Touch"
                variant="about"
            />
        </>
    )
}

export default About