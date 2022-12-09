import { Typography } from '@material-ui/core';
import React from 'react';
import './SubBanner.scss';
import PropTypes from 'prop-types';

const SubBannerItem = ({ image, label }) => {
  return (
    <div className="sub-banner-item">
      <img src={image} />
      <p>{label}</p>
    </div>
  );
};

const { string } = PropTypes;

SubBannerItem.propTypes = {
  image: string.required,
  label: string.required,
};

export default SubBannerItem;
