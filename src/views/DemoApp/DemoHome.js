import { Container } from '@material-ui/core';
import { Discover } from 'components';
import { News } from 'components';
import { SubBanner } from 'components';
import { Carousel } from 'components';
import React from 'react';

const DemoHome = () => {
  return (
    <Container maxWidth="md">
      <Carousel />
      <SubBanner />
      <Discover />
      <News />
    </Container>
  );
};

export default DemoHome;
