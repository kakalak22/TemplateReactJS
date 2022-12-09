import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import './Keywords.scss';

const Keywords = () => {
  const keywords = [
    'Việc làm online tại nhà',
    'Samsung Note 10',
    'Việc làm Thủ Đức',
    'Điện thoại Samsung',
    'Điện Thoại iPhone',
    'Việc làm Vĩnh Long',
    'Tìm việc làm TPHCM',
    'Việc làm quận Tân Bình',
    'Việc Làm Quận 8',
    'Việc làm quận 7',
    'Việc làm Tiền Giang',
    'Việc làm Huế',
    'Việc làm Thanh Hóa',
    'Việc làm Long An',
    'Việc làm Đà Lạt',
    'Việc làm Hải Phòng',
    'Việc làm Hà Nội',
    'Việc làm Đồng Nai',
    'Việc làm Đà Nẵng',
    'Việc làm Cần Thơ',
    'Việc làm Bình Dương',
    'Việc làm Bến Tre',
    'Việc làm Bắc Ninh',
    'Việc làm An Giang',
    'Việc làm thêm tại nhà',
    'Dàn karaoke cũ',
    'Tivi cũ giá rẻ',
    'Việc Làm Thời Vụ',
    'Điện thoại Samsung Cũ',
    'Chợ đồ cũ Hà Nội',
    'Chợ đồ cũ Sài Gòn',
    'Máy tính để bàn giá rẻ',
    'Ống kính (lens) cũ',
    'Máy ảnh cũ',
    'Máy quay cũ',
    'Micro cũ',
    'Tai Nghe Cũ',
    'Amply',
    'Loa Cũ',
    'Máy tính để bàn cũ',
    'Máy Tính Bảng Cũ',
    'Laptop Cũ',
    'Điện Thoại Cũ',
    'Laptop Apple Macbook',
  ];
  return (
    <div>
      <Typography variant="subtitle1" component={'p'}>
        Các từ khóa phổ biến
      </Typography>

      <ul className="keywords-wrapper">
        {keywords.map(word => (
          <Typography variant="subtitle2" component={'li'}>
            {word}
          </Typography>
        ))}
      </ul>
    </div>
  );
};

export default Keywords;
