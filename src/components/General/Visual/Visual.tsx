import {Image} from 'react-native';
import React, {FC} from 'react';

import {images} from '../../../assets/images';

interface VisualProps {
  image: any;
  imageStyle: object;
}

const Visual: FC<VisualProps> = ({image, imageStyle}) => {
  return (
    <Image source={images[image]} resizeMode="contain" style={imageStyle} />
  );
};

export default Visual;
