import React from 'react'
import { ViewMoreStyled } from './style'

const Index = ({listing}) => {
  return (
    <ViewMoreStyled>
      <div className="d-flex view-more">
        <p className="view-more-text">{listing}</p>
        <div className='view-more-line' />
      </div></ViewMoreStyled>
  )
}

export default Index