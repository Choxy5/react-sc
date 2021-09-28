import React from 'react';
import styled from 'styled-components';

import { PriceCard } from './PriceCard';

export function Price() {
  return (
    <Container>
      <PriceCard price="10" type="Basic" />
      <PriceCard price="10" type="Premium" />
      <PriceCard price="10" type="Advanced" />
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
