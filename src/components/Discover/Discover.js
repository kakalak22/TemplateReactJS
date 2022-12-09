import React from 'react';
import './Discover.scss';
import images from '../../images';
import DiscoverItem from './DiscoverItem';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

const NextArrow = props => {
  const { className, style, onClick } = props;
  return (
    <NavigateNextIcon className={className} style={{ ...style, display: 'block', color: 'black' }} onClick={onClick} />
  );
};

const PrevArrow = props => {
  const { className, style, onClick } = props;
  return (
    <NavigateBeforeIcon
      className={className}
      style={{ ...style, display: 'block', color: 'black' }}
      onClick={onClick}
    />
  );
};

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
    centerMode: false,
    centerPadding: '60px',
    infinite: false,
    slidesToShow: 5,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    slidesToScroll: 5,
    nextArrow: <NextArrow style={{ right: '-50px !important' }} />,
    prevArrow: <PrevArrow />,
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
