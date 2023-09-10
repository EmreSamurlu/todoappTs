import React from 'react';
import {View} from 'react-native';

import {useTheme} from '@react-navigation/native';

import {Button, ProfilePic, Text} from '../../General';
import styles from './LogoutCard.styles';

export interface LogoutCardProps {
  userName: string;
  handleLogout: () => void;
}

const LogoutCard: React.FC<LogoutCardProps> = ({userName, handleLogout}) => {
  const {colors} = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
        },
      ]}>
      <View style={styles.inner_container}>
        <ProfilePic imageUrl="https://picsum.photos/200/200" />
        <Text
          text={userName}
          textStyle={[styles.username, {color: colors.text}]}
        />
      </View>
      <Text
        text="Do you want to log out?"
        textStyle={[styles.logout_message, {color: colors.text}]}
      />
      <Button
        type={'default'}
        color={'red'}
        iconName="arrow-right-to-bracket"
        iconColor={colors.buttonText}
        label="Yes I want to go out"
        onPress={handleLogout}
      />
    </View>
  );
};

export default LogoutCard;
