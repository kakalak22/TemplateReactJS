import React from 'react';
import './Discover.scss';
import images from '../../images';
import DiscoverItem from './DiscoverItem';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Discover = () => {
  const discoverItems = [
    {
      label: 'Bất động sản',
      image: images.bds,
    },
    {
      label: 'Xe cộ',
      image: images.xe,
    },
    {
      label: 'Đồ điện tử',
      image: images.dt,
    },
    {
      label: 'Đồ gia dụng',
      image: images.dogiadung,
    },
    {
      label: 'Giải trí, thể thao, sở thích',
      image: images.giaitri,
    },
    {
      label: 'Mẹ và bé',
      image: images.me,
    },
    {
      label: 'Việc làm',
      image: images.job,
    },
    {
      label: 'Du lịch',
      image: images.dulich,
    },
    {
      label: 'Bất động sản',
      image: images.bds,
    },
    {
      label: 'Xe cộ',
      image: images.xe,
    },
    {
      label: 'Đồ điện tử',
      image: images.dt,
    },
    {
      label: 'Đồ gia dụng',
      image: images.dogiadung,
    },
    {
      label: 'Giải trí, thể thao, sở thích',
      image: images.giaitri,
    },
    {
      label: 'Mẹ và bé',
      image: images.me,
    },
    // {
    //     label: "Việc làm",
    //     image: images.job
    // },
    // {
    //     label: "Du lịch",
    //     image: images.dulich
    // },
  ];
  const discoverItemsLength = discoverItems.length;

  const settings = {
    className: 'center',
    centerPadding: '60px',
    slidesToShow: 5,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    slideToScroll: 1,
  };
  return (
    <div>
      <h5>Khám phá danh mục</h5>
      <Slider {...settings}>
        {discoverItems.map(({ image, label }, index) => {
          return <DiscoverItem key={index} image={image} label={label} />;
        })}
      </Slider>

      {/*
        
            <div className="discover-item-wrapper">
                {
                    discoverItems.map(({ image, label }, index) => {

                        return <DiscoverItem key={index} image={image} label={label} />
                    }
                    )
                }
            </div>
            */}
    </div>
  );
};

export default Discover;
