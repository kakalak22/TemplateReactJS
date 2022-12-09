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
    </div>
  );
};

export default News;
