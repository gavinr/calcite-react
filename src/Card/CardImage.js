import PropTypes from 'prop-types';
import React from 'react';
import {
  StyledCardImageWrap,
  StyledCardImage,
  StyledCardImageCaption
} from './Card-styled';

const CardImage = ({ children, src, caption, alt, shaped, wide, ...other }) => {
  let figcaption;
  if (!shaped) {
    figcaption = <StyledCardImageCaption>{caption}</StyledCardImageCaption>;
  }

  const cardImage = (
    <StyledCardImageWrap shaped={shaped} wide={wide} {...other}>
      <StyledCardImage wide={wide} src={src} alt={alt} />
      {figcaption}
    </StyledCardImageWrap>
  );

  return cardImage;
};

CardImage.propTypes = {
  children: PropTypes.node,
  src: PropTypes.string,
  caption: PropTypes.string,
  alt: PropTypes.string,
  shaped: PropTypes.bool,
  wide: PropTypes.bool
};

CardImage.defaultProps = {
  src: '',
  caption: '',
  alt: '',
  shaped: false,
  wide: false
};

export default CardImage;