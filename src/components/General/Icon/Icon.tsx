import React, {FC} from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface IconProps {
  iconName: string;
  iconSize: number;
  iconColor: string;
}

const Icon: FC<IconProps> = ({iconName, iconSize, iconColor}) => {
  return (
    <MaterialCommunityIcons name={iconName} size={iconSize} color={iconColor} />
  );
};

export default Icon;
