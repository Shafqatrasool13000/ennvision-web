import React from 'react';
import { ProfessionalStyled } from './style';
import professional1 from '../../assets/Image/ic_professional_1.png';
import professional2 from '../../assets/Image/ic_professional_2.png';
import professional3 from '../../assets/Image/ic_professional_3.png';
import professional4 from '../../assets/Image/ic_professional_4.png';
import { Col, Container, Row } from 'react-bootstrap';

const professionalsData=[
  {
    name:"Mia Smith",profession:'Real Estate Agent',img:professional1
  },
   {
    name:"Mia Smith",profession:'Real Estate Agent',img:professional2
  }, 
  {
    name:"Mia Smith",profession:'Real Estate Agent',img:professional3
  }, {
    name:"Mia Smith",profession:'Real Estate Agent',img:professional4
  },
  {
    name:"Mia Smith",profession:'Real Estate Agent',img:professional1
  },
   {
    name:"Mia Smith",profession:'Real Estate Agent',img:professional2
  }, 
  {
    name:"Mia Smith",profession:'Real Estate Agent',img:professional3
  }, {
    name:"Mia Smith",profession:'Real Estate Agent',img:professional4
  }
 
]

const Professionals = () => {
  return (
    <ProfessionalStyled>
        <Container>  
        <Row className='professionals justify-content-center'>
          {
          professionalsData.map(({name,profession,img})=>(
        <Col sm={6} md={4} lg={3}>
         <div className="professional-container" style={{
          backgroundImage:`url(${img})`,
          backgroundRepeat:'no-repeat',
          position: 'relative',
          height: '300px',
          backgroundSize:'cover',
          zIndex:'-1'
         }}>
         
         </div>
         <div className="d-flex justify-content-center">

          <div className="detail-text">
          <h6 className="name">{name}</h6>
          <p className="profession">{profession}</p>
            <div className="contact-btns">

            </div>
          </div>
         </div>
          </Col>
            ))
          }
       
        </Row>
        </Container>
    </ProfessionalStyled>
  )
}

export default Professionals