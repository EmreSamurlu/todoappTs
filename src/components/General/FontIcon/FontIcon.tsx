import React, {FC} from 'react';

import {library} from '@fortawesome/fontawesome-svg-core';
import {
  faArrowRightToBracket,
  faCalendarDay,
  faCheck,
  faChevronDown,
  faChevronLeft,
  faGear,
  faListCheck,
  faLock,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

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
  faCalendarDay,
);

const FontIcon: FC<IconProps> = ({iconName, iconSize, iconColor}) => {
  return <FontAwesomeIcon icon={iconName} color={iconColor} size={iconSize} />;
};

export default FontIcon;
