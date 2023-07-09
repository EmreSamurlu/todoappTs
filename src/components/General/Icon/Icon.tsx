import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export interface IconProps {
  iconName: string;
  iconSize: number;
  iconColor: string;
}

const Icon: React.FC<IconProps> = ({iconName, iconSize, iconColor}) => {
  return <MaterialIcon name={iconName} size={iconSize} color={iconColor} />;
};

export default Icon;
