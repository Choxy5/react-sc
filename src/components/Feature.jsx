import React from 'react';
import styled from 'styled-components';

import App from '../img/app.png';
import { AnimatedShape } from './AnimatedShape';

export function Feature() {
  return (
    <Container>
      <Left>
        <Image src={App} />
      </Left>
      <Right>
        <Title>
          <b>good</b> design <br />
          <b>good</b> business
        </Title>
        <Subtitle>We know that good design means good business.</Subtitle>
        <Desc>
          We help out clinets succeed by creating breand identites, digital
          experiences, and print materials that communicate clearly, achieve
          marketing goals, and look fantastic.
        </Desc>
        <Desc>
          We care your business and guarantee you to achieve marketing goals
        </Desc>
        <Button>Learn more</Button>
      </Right>
      <AnimatedShape />
    </Container>
  );
}

const Container = styled.div`
  display: flex;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;

const Left = styled.div`
  width: 50%;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  margin-top: 100px;
  margin-left: -100px;
`;

const Title = styled.span`
  font-size: 70px;

  @media only screen and (max-width: 480px) {
    font-size: 50px;
  }
`;

const Subtitle = styled.span`
  font-size: 24px;
  font-size: italic;
  color: #333;
  margin-top: 30px;
`;

const Desc = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
`;

const Button = styled.button`
  width: 150px;
  border: none;
  padding: 15px 20px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 20px;
  margin-top: 20px;
  cursor: pointer;
`;
