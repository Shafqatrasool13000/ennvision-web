import React from 'react'
import { Link } from 'react-router-dom'
import { SecondaryHeading, TertiraryHeadingMini, UnderlineRed } from '../../Components/GlobalStyle'
import { ProfessionalStyled } from './style'

const Professionals = () => {
  return (
    <ProfessionalStyled>
       <SecondaryHeading className='text-center'>Find a Professionals</SecondaryHeading>
      <TertiraryHeadingMini className='text-center'>Search For A Qualified Professional In Your Area</TertiraryHeadingMini>
      <div>
        <UnderlineRed />
        {/* <BlackDot/> */}
        {/* <Link to="/properties" className="pxp-areas-1-item rounded-lg">
                  <div
                    className="pxp-areas-1-item-fig pxp-cover"
                    style={{
                      backgroundImage: `url(${
                        data &&
                        data.properties &&
                        data.properties[0].imageList &&
                        data.properties[0].imageList[0].imageURL
                          ? data.properties[0].imageList[0].imageURL
                          : 'assets/images/area-2.jpg'
                      })`,
                    }}
                  />
                  <div className="pxp-areas-1-item-details">
                    <div className="pxp-areas-1-item-details-area">
                      {data && data.cityName}
                    </div>
                    <div className="pxp-areas-1-item-details-area">
                      <span>{data && data.propertyCount} Properties</span>
                    </div>
                    <div className="pxp-areas-1-item-details-city"></div>
                  </div>
                  <div className="pxp-areas-1-item-cta text-uppercase">
                    Explore
                  </div>
                </Link> */}
      </div>
    </ProfessionalStyled>
  )
}

export default Professionals