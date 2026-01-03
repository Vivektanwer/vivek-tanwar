import React from 'react'
import HearoSection from '../HomeComponent/HearoSection'
import AboutSection from '../HomeComponent/AboutSection'
import ResumeSection from '../HomeComponent/ResumeSection'
import ServiceSection from '../HomeComponent/ServiceSection'
import SkillSection from '../HomeComponent/SkillSection'
import ProjectSection from '../HomeComponent/ProjectSection'
import FreelancingSection from '../HomeComponent/FreelancingSection'
import ContactSection from '../HomeComponent/ContactSection'

export const Home = () => {
  return (
    <>
        <HearoSection />
        <AboutSection />
        <ResumeSection />
        <ServiceSection />
        <SkillSection />
        <ProjectSection />
        <FreelancingSection />
        <ContactSection />
    </>
  )
}
