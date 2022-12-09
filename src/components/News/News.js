import { Box, Grid } from '@material-ui/core';
import React from 'react';
import CardItem from './CardItem';
import './News.scss';

const News = () => {
  return (
    <div>
      <h5>Tin đăng mới</h5>
      <div className="news-wrapper">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
      <Grid container>
        <Grid item xs={12} className="view-more">
          Xem thêm
        </Grid>
      </Grid>
    </div>
  );
};

export default News;
