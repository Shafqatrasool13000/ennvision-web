import React from 'react'
import HeroSection from './HeroSection'
import ExploreProperty from './ExploreProperty';
import FeatureProperties from './FeatureProperties';
import { Container } from 'react-bootstrap';
import WhyChooseUs from './WhyChooseUs';
import FindProfessional from './FindProfessional';
import Professionals from './Professionals';
import WhoWeAre from './WhoWeAre';
import Testomonials from './Testomonials';
import MembershipPlans from './MembershipPlans';

const Index = () => {
  return (
    <>
      <HeroSection />
      <Container>
      <ExploreProperty />
      <FeatureProperties />
      </Container>
      <WhyChooseUs />
      <FindProfessional />
      <Professionals />
      <WhoWeAre/>
      <Testomonials/>
      <MembershipPlans/>
    </>
  )
}

export default Index