import React from 'react';
import { Link } from 'react-router-dom';
import { WhyChooseUsStyled } from './style';
import whyChooseBanner from '../../assets/Image/ic_services_img.png';
import serviceIcon1 from '../../assets/icons/ic_services_1.svg'; 
import serviceIcon2 from '../../assets/icons/ic_services_2.svg'; 
import serviceIcon3 from '../../assets/icons/ic_services_3.svg';
import serviceIcon4 from '../../assets/icons/ic_services_4.svg'; 
import { UnderlineRed } from '../../Components/GlobalStyle';

const WhyChooseUs = () => {
  return (
    <WhyChooseUsStyled>
       <div
          className="pxp-services pxp-cover mt-100 pt-100 mb-200"
          style={{ backgroundImage: `url(${whyChooseBanner})` }}
        >
          <h2 className="text-center pxp-section-h2">Why Choose Us</h2>
          <p className="pxp-text-light text-center">
          Take Control Of The Most Important Decision Of Your Life
          </p>
          <UnderlineRed/>
          <div className="container">
            <div className="pxp-services-container rounded-lg mt-4 mt-md-5">
              <Link to="/properties" className="pxp-services-item">
                <div className="pxp-services-item-fig">
                  <img src={serviceIcon1} alt="properties" />
                </div>
                <div className="pxp-services-item-text text-center">
                  <div className="pxp-services-item-text-title">
                  List Your Property
                  </div>
                  <div className="pxp-services-item-text-sub">
                  Sell or rent your property 
                    <br />without paying realtor fees
                  </div>
                </div>
                <div className="pxp-services-item-cta text-uppercase text-center">
                  Learn More
                </div>
              </Link>
              <Link to="/professionals" className="pxp-services-item">
                <div className="pxp-services-item-fig">
                  <img src={serviceIcon2} alt="home" />
                </div>
                <div className="pxp-services-item-text text-center">
                  <div className="pxp-services-item-text-title">
                  Find a Home
                  </div>
                  <div className="pxp-services-item-text-sub">
                  A smarter, easier way to 
                  <br />
                  search homes and rentals
                  </div>
                </div>
                <div className="pxp-services-item-cta text-uppercase text-center">
                  Learn More
                </div>
              </Link>
              <Link to="/properties" className="pxp-services-item">
                <div className="pxp-services-item-fig">
                  <img src={serviceIcon3} alt="homes" />
                </div>
                <div className="pxp-services-item-text text-center">
                  <div className="pxp-services-item-text-title">
                  Get Help From The Pros
                  </div>
                  <div className="pxp-services-item-text-sub">
                  Find a professional to help 
                    <br />
                  you sell your home
                  </div>
                </div>
                <div className="pxp-services-item-cta text-uppercase text-center">
                  Learn More
                </div>
              </Link>
              <Link to="/add-new-prop" className="pxp-services-item">
                <div className="pxp-services-item-fig">
                  <img src={serviceIcon4} alt="services" />
                </div>
                <div className="pxp-services-item-text text-center">
                  <div className="pxp-services-item-text-title">
                  Engage The Audience
                  </div>
                  <div className="pxp-services-item-text-sub">
                  Search thousands of house 
                    <br />
                  and apartments in your area
                  </div>
                </div>
                <div className="pxp-services-item-cta text-uppercase text-center">
                  Learn More
                </div>
              </Link>
              <div className="clearfix" />
            </div>
          </div>
        </div>
    </WhyChooseUsStyled>
  )
}

export default WhyChooseUs