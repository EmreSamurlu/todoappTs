import {Dimensions} from 'react-native';

export const getKeyValue =
  <T extends object, U extends keyof T>(obj: T) =>
  (key: U) =>
    obj[key];

export const getDimensions = () => {
  const height = Dimensions.get('screen').height;
  const width = Dimensions.get('screen').width;
  return {height, width};
};
