import React, {useState} from 'react';
import {View} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';
import {Formik} from 'formik';

import {TextInput, TextButton, Button} from '../../General';
import styles from './LoginForm.styles';
import {useDispatch} from 'react-redux';
import {loginThunk} from '../../../redux/features/auth/thunks';
import {LoginFormProps} from 'src/screens/Auth/AuthTypes';
import {routeNames} from '../../../navigation/route-names';

const initialValues: LoginFormProps = {
  email: 'test',
  password: '123456',
};

const LoginForm = () => {
  const dispatch = useDispatch<any>();
  const navigation = useNavigation();
  const {colors} = useTheme();
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const handleFormSubmit = (values: LoginFormProps) => {
    if (values) {
      dispatch(loginThunk(values));
    }
  };
  const handleNavigateSignup = () => {
    navigation.navigate(routeNames.SignUp as never);
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
          </View>
          <TextButton
            label="Show Password"
            onButtonPress={handleShowbutton}
            labelStyle={[styles.show_button, {color: colors.blue}]}
          />
          <View style={styles.button_container}>
            <Button
              color={'blue'}
              label="Login"
              type={'default'}
              onPress={handleSubmit}
            />
            <Button
              color={'blue'}
              label="Go to SignUp Page"
              onPress={handleNavigateSignup}
              type={'outline'}
            />
          </View>
        </View>
      )}
    </Formik>
  );
};

export default LoginForm;
