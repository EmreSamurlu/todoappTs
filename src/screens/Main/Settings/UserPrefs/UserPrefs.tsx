import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Page, SwitchButton, Text} from '@components';
import {routeNames} from '../../../../navigation/route-names';
import {styles} from './UserPrefs.styles';
import {useDispatch} from 'react-redux';
import {setTheme} from '../../../../redux/features/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {storageConstants} from '@constants';

const UserPrefs = () => {
  const dispatch = useDispatch();
  const {colors} = useTheme();

  const [isThemeSwitchOn, setIsThemeSwitchOn] = useState<boolean>(false);
  const [isLangSwitchOn, setIsLangSwitchOn] = useState<boolean>(false);

  useEffect(() => {
    AsyncStorage.getItem(storageConstants.theme).then(val => {
      if (val) {
        dispatch(setTheme(val));
        setIsThemeSwitchOn(val === 'dark');
      }
    });
  }, [dispatch]);

  const handleSwitch = ({value, type}: {value: boolean; type: string}) => {
    if (type === 'theme') {
      dispatch(setTheme(value ? 'dark' : 'light'));
      setIsThemeSwitchOn(value);
    }
    if (type === 'language') {
      setIsLangSwitchOn(value);
    }
  };

  return (
    <Page
      pageStyle={styles.page_container}
      goBack
      pageTitle={routeNames.UserPrefs}>
      <View style={styles.profile_item}>
        <Text text={'Theme'} textStyle={[styles.label, {color: colors.text}]} />
        <SwitchButton
          falseValue="Light"
          trueValue="Dark"
          isEnabled={isThemeSwitchOn}
          toggleSwitch={val => handleSwitch({value: val, type: 'theme'})}
        />
      </View>
      <View style={styles.profile_item}>
        <Text
          text={'Language'}
          textStyle={[styles.label, {color: colors.text}]}
        />
        <SwitchButton
          falseValue="TR"
          trueValue="EN"
          isEnabled={isLangSwitchOn}
          toggleSwitch={val => handleSwitch({value: val, type: 'language'})}
        />
      </View>
    </Page>
  );
};

export default UserPrefs;
