import React, {useState} from 'react';
import {View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Formik} from 'formik';

import {TextInput, TextButton, Button} from '../../General';
import styles from './LoginForm.styles';
import {useDispatch} from 'react-redux';
import {loginThunk} from '../../../redux/features/auth/thunks/loginThunk';
import {LoginFormProps, ValuesProp} from 'src/screens/Auth/Login/LoginTypes';

const initialValues: ValuesProp = {
  email: 'test',
  password: '123456',
};

const LoginForm: React.FC<LoginFormProps> = () => {
  const dispatch = useDispatch<any>();
  const {colors} = useTheme();
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const handleFormSubmit = (values: ValuesProp) => {
    if (values) {
      dispatch(loginThunk(values));
    }
  };
  const handleNavigateSignup = () => {};
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
              label="SignUp"
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
