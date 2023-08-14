import React from 'react';
import {View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import styles from './LogoutCard.styles';
import {Button, ProfilePic, Text} from '../../General';

export interface LogoutCardProps {
  userName: string;
}

const LogoutCard: React.FC<LogoutCardProps> = ({userName}) => {
  const {colors} = useTheme();

  const handleLogout = () => {
    console.log('logout');
  };

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
        iconName="logout"
        iconColor={colors.buttonText}
        label="Yes I want to go out"
        onPress={handleLogout}
      />
    </View>
  );
};

export default LogoutCard;
