import React from 'react'
import HeroSection from './HeroSection'
import { HomeStyled } from './style';
import scroll_up from '../../assets/icons/ic_scroll_to_top .svg';
import ExploreProperty from './ExploreProperty';
import FeatureProperties from './FeatureProperties';
import { Container } from 'react-bootstrap';
import WhyChooseUs from './WhyChooseUs';
import FindProfessional from './FindProfessional';
import Professionals from './Professionals';

const Index = () => {
  return (
    <HomeStyled>
      <span className='arrow-box'>
        <img src={scroll_up} alt="scroll-up" />
      </span>
      <HeroSection />
      <Container>
        <ExploreProperty />
        <FeatureProperties />
      </Container>
      <WhyChooseUs />
      <FindProfessional />
      <Professionals />
    </HomeStyled>
  )
}

export default Index