import PropTypes from 'prop-types';
import React, { Children } from 'react';

import { StyledTab } from './Tab-styled';

import { getChildType } from '../utils/helpers';

const Tabs = ({
  children,
  activeTabIndex,
  onTabChange,
  gray,
  transparent,
  translucent,
  dark,
  ...other
}) => {
  const childArray = Children.toArray(children);
  const childrenWithProps = childArray.map((child, i) => {
    switch (getChildType(child)) {
      case 'TabNav':
        return React.cloneElement(child, {
          activeTabIndex,
          onTabChange,
          gray,
          transparent,
          translucent,
          dark
        });
      case 'TabContents':
        return React.cloneElement(child, {
          activeTabIndex,
          gray,
          transparent,
          translucent,
          dark
        });
      default:
        return child;
    }
  });

  return (
    <StyledTab
      gray={gray}
      transparent={transparent}
      translucent={translucent}
      dark={dark}
      {...other}
    >
      {childrenWithProps}
    </StyledTab>
  );
};

Tabs.propTypes = {
  /** Description TBD */
  children: PropTypes.node,
  activeTabIndex: PropTypes.number,
  onTabChange: PropTypes.func,
  gray: PropTypes.bool,
  transparent: PropTypes.bool,
  translucent: PropTypes.bool,
  dark: PropTypes.bool
};

Tabs.defaultProps = {
  activeTabIndex: 0,
  onTabChange: () => {}
};

Tabs.displayName = 'Tabs';

export default Tabs;
