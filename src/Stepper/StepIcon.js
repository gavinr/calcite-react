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

import {
  StyledStepIcon,
  StepAvatarStyles,
  StepIconStyle,
  StepCustomIconStyles
} from './Stepper-styled';
import Avatar from '../Avatar';

import CheckIcon from 'calcite-ui-icons-react/CheckIcon';
import XIcon from 'calcite-ui-icons-react/XIcon';

const StepIcon = ({
  children,
  icon,
  small,
  active,
  complete,
  error,
  vertical,
  ...other
}) => {
  const getIconContent = icon => {
    if (icon) {
      //Use custom icon if they give it to us
      const smallStyle = small ? { ...StepCustomIconStyles.small } : null;
      const completeStyle = complete
        ? { ...StepCustomIconStyles.complete }
        : null;
      const activeStyle = active ? { ...StepCustomIconStyles.active } : null;
      const errorStyle = error ? { ...StepCustomIconStyles.error } : null;

      return React.cloneElement(icon, {
        style: {
          ...StepCustomIconStyles.default,
          ...completeStyle,
          ...activeStyle,
          ...errorStyle,
          ...smallStyle
        }
      });
    } else {
      //Otherwise create an avatar based on the settings
      let avatarContent;
      const smallStyle = small ? { ...StepAvatarStyles.small } : null;
      const completeStyle = complete ? { ...StepAvatarStyles.complete } : null;
      const activeStyle = active ? { ...StepAvatarStyles.active } : null;
      const errorStyle = error ? { ...StepAvatarStyles.error } : null;

      if (error) {
        avatarContent = (
          <XIcon size={small ? 16 : 24} style={{ ...StepIconStyle }} />
        );
      } else if (complete) {
        avatarContent = (
          <CheckIcon size={small ? 16 : 24} style={{ ...StepIconStyle }} />
        );
      } else {
        avatarContent = children;
      }

      return (
        <Avatar
          style={{
            ...StepAvatarStyles.default,
            ...completeStyle,
            ...activeStyle,
            ...errorStyle,
            ...smallStyle
          }}
        >
          {avatarContent}
        </Avatar>
      );
    }
  };

  return (
    <StyledStepIcon
      small={small}
      complete={complete}
      vertical={vertical}
      {...other}
    >
      {getIconContent(icon)}
    </StyledStepIcon>
  );
};

StepIcon.propTypes = {
  /** The content of the component. */
  children: PropTypes.node
};

StepIcon.defaultProps = {};

StepIcon.displayName = 'StepIcon';

export default StepIcon;
