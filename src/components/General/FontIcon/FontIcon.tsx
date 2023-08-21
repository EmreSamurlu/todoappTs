import React, {FC} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';

import {
  faCheck,
  faLock,
  faListCheck,
  faGear,
  faChevronLeft,
  faChevronDown,
  faArrowRightToBracket,
} from '@fortawesome/free-solid-svg-icons';
export interface IconProps {
  iconName: any;
  iconSize: number;
  iconColor: string;
}
library.add(
  faCheck,
  faLock,
  faListCheck,
  faGear,
  faChevronLeft,
  faChevronDown,
  faArrowRightToBracket,
);

const FontIcon: FC<IconProps> = ({iconName, iconSize, iconColor}) => {
  return <FontAwesomeIcon icon={iconName} color={iconColor} size={iconSize} />;
};

export default FontIcon;
