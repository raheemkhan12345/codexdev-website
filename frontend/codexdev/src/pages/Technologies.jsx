import React from 'react'
import TechHero from '../features/technology-heroSection/TechHero'
import TechDNA from '../features/technology-ourTechDNA/TechDNA'
import EcosystemArchitecture from '../features/technology-ourEcosystemArch/EcosystemArchitecture'
import TechStack from '../features/technology-techStack/TechStack'
import SectorExpertise from '../features/technology-SectorExpertise/SectorExpertise'
import ContactBanner from '../features/home-ContactBanner/ContactBanner'

const Technologies = () => {
    return (
        <>
            <TechHero />
            <TechDNA />
            <EcosystemArchitecture />
            <TechStack />
            <SectorExpertise />
            <ContactBanner
                title="Let's Build Your Next Digital Product Using
                Modern Technologies"
                subtitle="Our team is ready to transform your vision into a scalable, high-performance
                reality. Schedule a technical deep-dive today."
                primaryBtnText="Get Started Now"
                secondaryBtnText="View Our Portfolio"
                variant="about"
            />
        </>
    )
}

export default Technologies