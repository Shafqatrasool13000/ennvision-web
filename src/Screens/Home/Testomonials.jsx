import React from 'react';
import { SecondaryHeading, TertiraryHeadingMini, UnderlineRed } from '../../Components/GlobalStyle';
import { TestomonialStyled } from './style';
import testomonialImg1 from '../../assets/Image/ic_testimonials.png';
import { Col, Row } from 'react-bootstrap';
import AliceCarousel from 'react-alice-carousel';

const testomonialsData=[
  {
    name:'Jessica Alba',
    description:'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew',
    date:'March, 07 2022',
    img:testomonialImg1
  },
  {
    name:'Jessica Alba',
    description:'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew',
    date:'March, 07 2022',
    img:testomonialImg1
  },
  {
    name:'Jessica Alba',
    description:'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew',
    date:'March, 07 2022',
    img:testomonialImg1
  },
  
]
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 2 },
};
const Testomonials = () => {
  const items = [
    ...testomonialsData.map(({name,date,description,img})=>(
      <Row className="box">
      <Col md={3} className="profile-section">
        <img src={img}alt="testomonial" />
        <h6 className="name">{name}</h6>
      </Col>
      <Col md={9} className="detail-section">
        <p className='detail-section-text'>{description}</p>
      <div className='detail-section-line'/>
     <div className="further-details d-flex justify-content-between">
      <span>Stars</span>
      <p className="date">{date}</p>
     </div>
      </Col>
    </Row>
    ))
  ];
 
  return (
    <TestomonialStyled>
      <div className='testomonial-inner'>
      <SecondaryHeading className='text-center'>Testimonials</SecondaryHeading>
      <TertiraryHeadingMini className='text-center'>What Clients Are Saying About Us</TertiraryHeadingMini>
      <div>
        <UnderlineRed/>
        {/* <BlackDot/> */}
        </div>
        <div className="testomonial-inner-cards">
        <AliceCarousel mouseTracking items={items} responsive={responsive} 
        disableButtonsControls
        disableDotsControls
/>
         
        </div>

      </div>
    </TestomonialStyled>
  )
}

export default Testomonials