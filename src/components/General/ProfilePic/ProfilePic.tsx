import React, {FC} from 'react';
import {Image} from 'react-native';

export interface ProfilePicProps {
  frameSize?: number;
  imageUrl: string;
}

const ProfilePic: FC<ProfilePicProps> = ({imageUrl, frameSize = 40}) => {
  return (
    <Image
      style={{
        width: frameSize,
        height: frameSize,
        borderRadius: frameSize / 2,
      }}
      source={{uri: imageUrl}}
    />
  );
};

export default ProfilePic;
