// Copyright 2019 Esri
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.​

import PropTypes from 'prop-types';
import React from 'react';

import { StyledTabTitle } from './Tab-styled';

const TabTitle = ({
  children,
  index,
  activeTabIndex,
  setActiveTabIndex,
  ...other
}) => {
  const handleSetActiveTabIndex = e => {
    setActiveTabIndex(e, index);
  };

  return (
    <StyledTabTitle
      onClick={handleSetActiveTabIndex}
      active={activeTabIndex === index}
      {...other}
    >
      {children}
    </StyledTabTitle>
  );
};

TabTitle.propTypes = {
  /** The text content of the component. */
  children: PropTypes.node
};

TabTitle.defaultProps = {};

TabTitle.displayName = 'TabTitle';

export default TabTitle;
