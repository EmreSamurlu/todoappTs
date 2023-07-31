import React, {FC} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faCheck} from '@fortawesome/free-solid-svg-icons/faCheck';

export interface IconProps {
  iconName: any;
  iconSize: number;
  iconColor: string;
}
library.add(faCheck);

const FontIcon: FC<IconProps> = ({iconName, iconSize, iconColor}) => {
  return <FontAwesomeIcon icon={iconName} color={iconColor} size={iconSize} />;
};

export default FontIcon;
