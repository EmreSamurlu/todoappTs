import React, {FC} from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export interface IconProps {
  iconName: string;
  iconSize: number;
  iconColor: string;
}

const MaterialIcon: FC<IconProps> = ({iconName, iconSize, iconColor}) => {
  return (
    <MaterialCommunityIcons name={iconName} size={iconSize} color={iconColor} />
  );
};

export default MaterialIcon;
