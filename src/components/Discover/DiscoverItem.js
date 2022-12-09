import React from 'react';
import PropTypes from 'prop-types';

const DiscoverItem = ({ image, label }) => {
  return (
    <div className="discover-item">
      <img src={image} />
      <p>{label}</p>
    </div>
  );
};

const { string } = PropTypes;

DiscoverItem.propTypes = {
  image: string.required,
  label: string.required,
};

export default DiscoverItem;
