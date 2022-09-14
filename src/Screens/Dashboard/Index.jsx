import React from 'react';
import { Container } from 'react-bootstrap';
import { lightGrey5 } from '../../Components/GlobalStyle';
import RoleAndCommisions from './RoleAndCommisions';
import WeeklyTotalIncome from './WeeklyTotalIncome';

const Index = () => {

  return (
    <div style={{
      background:` ${lightGrey5}`
    }}>
      <Container>
        <RoleAndCommisions />
        <WeeklyTotalIncome />
      </Container>
    </div>
  )
}

export default Index