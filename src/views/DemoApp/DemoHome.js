import { Container } from '@material-ui/core';
import { Discover } from 'components';
import { Description } from 'components';
import { Keywords } from 'components';
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
      <Description />
      <Keywords />
    </Container>
  );
};

export default DemoHome;
