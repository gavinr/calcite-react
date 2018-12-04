import PropTypes from 'prop-types';
import React, { createContext, forwardRef } from 'react';
import { StyledCard } from './Card-styled';

const CardContext = createContext({
  cardContext: {
    shaped: undefined,
    wide: undefined
  }
});

const Card = forwardRef(({ children, shaped, wide, ...other }, ref) => {
  const cardContext = {
    shaped,
    wide
  };

  return (
    <CardContext.Provider value={{ cardContext }}>
      <StyledCard shaped={shaped} wide={wide} ref={ref} {...other}>
        {children}
      </StyledCard>
    </CardContext.Provider>
  );
});

Card.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  /** Description TBD */
  bar: PropTypes.string,
  /** Description TBD */
  shaped: PropTypes.bool,
  /** Description TBD */
  wide: PropTypes.bool
};

Card.defaultProps = {};

Card.displayName = 'Card';

export { Card as default, CardContext };
