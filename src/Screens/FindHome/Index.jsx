import React from 'react';
import { FindHomeStyled } from './style';
import AuthNavbar from '../../Components/Navbar/AuthNavbar';
import Properties from '../Home/Properties';
import { Container } from 'react-bootstrap';
import SocialFooter from '../../Components/SocialFooter/SocialFooter';

const Index = () => {
  return (
    <FindHomeStyled>
    <AuthNavbar/>
    <Container>
    {/* <Filters/> */}
    <SocialFooter/>
    {/* <PropertiesMap/> */}
    <Properties/>
    </Container>
    </FindHomeStyled>
  )
}

export default Index