import ProfilePic, {type ProfilePicProps} from './ProfilePic';
import type {Meta, StoryObj} from '@storybook/react-native';

const ProfilePicMeta: Meta<ProfilePicProps> = {
  title: 'ProfilePic',
  component: ProfilePic,
  args: {
    frameSize: 40,
    imageUrl: 'https://picsum.photos/200/200',
  },
};

export default ProfilePicMeta;

export const Basic: StoryObj<ProfilePicProps> = {};
