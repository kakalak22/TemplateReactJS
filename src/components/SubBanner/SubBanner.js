import React from 'react';
import SubBannerItem from './SubBannerItem';
import images from '../../images';

const SubBanner = () => {
  const subBannerItems = [
    {
      image: images.shipping,
      label: 'Miễn phí vận chuyển',
    },
    {
      image: images.gift,
      label: 'Đăng tin cho tặng',
    },
    {
      image: images.car,
      label: 'Định giá bán xe',
    },
    {
      image: images.money,
      label: 'Nạp đồng tốt',
    },
    {
      image: images.star,
      label: 'Chợ tốt ưu đãi',
    },
    {
      image: images.heart,
      label: 'Tin đăng đã lưu',
    },
    {
      image: images.spin,
      label: 'Vòng quay may mắn',
    },
    {
      image: images.bookmark,
      label: 'Tìm kiếm đã lưu',
    },
  ];

  return (
    <div className="sub-item-wrapper">
      {subBannerItems.map(({ image, label }, index) => (
        <SubBannerItem key={index} image={image} label={label} />
      ))}
    </div>
  );
};

export default SubBanner;
