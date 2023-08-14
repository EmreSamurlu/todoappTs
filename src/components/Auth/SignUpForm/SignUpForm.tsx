import React, {useState} from 'react';
import {View} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';
import {Formik} from 'formik';

import {TextInput, TextButton, Button} from '../../General';
import styles from './SignUpForm.styles';
import {useDispatch} from 'react-redux';

import {SignUpFormProps} from 'src/screens/Auth/AuthTypes';
import {signupThunk} from '../../../redux/features/auth/thunks';
import {routeNames} from '../../../navigation/route-names';

const initialValues: SignUpFormProps = {
  email: 'test',
  password: '123456',
  re_password: '123456',
};

const SignUpForm = () => {
  const dispatch = useDispatch<any>();
  const navigation = useNavigation();
  const {colors} = useTheme();
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const handleFormSubmit = (values: SignUpFormProps) => {
    if (values) {
      dispatch(signupThunk(values));
    }
  };
  const handleNavigateLogin = () => {
    navigation.navigate(routeNames.Login as never);
  };
  const handleShowbutton = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
      {({handleChange, handleSubmit, values}) => (
        <View style={styles.container}>
          <View style={styles.inner_container}>
            <TextInput
              onChangeText={handleChange('email')}
              placeholder="Email"
              iconName={'arrow-right-to-bracket'}
              value={values.email}
              autoCap={'none'}
            />
            <TextInput
              onChangeText={handleChange('password')}
              placeholder="Password"
              iconName={'lock'}
              value={values.password}
              secureTextEntry={!isPasswordVisible}
              autoCap={'none'}
            />
            <TextInput
              onChangeText={handleChange('re_password')}
              placeholder="Re Enter Password"
              iconName={'lock'}
              value={values.re_password}
              secureTextEntry={!isPasswordVisible}
              autoCap={'none'}
            />
          </View>
          <TextButton
            label="Show Password"
            onButtonPress={handleShowbutton}
            labelStyle={[styles.show_button, {color: colors.blue}]}
          />
          <View style={styles.button_container}>
            <Button
              color={'blue'}
              label="SignUp"
              type={'default'}
              onPress={handleSubmit}
            />
            <Button
              color={'blue'}
              label="Go to Login Page"
              onPress={handleNavigateLogin}
              type={'outline'}
            />
          </View>
        </View>
      )}
    </Formik>
  );
};

export default SignUpForm;
