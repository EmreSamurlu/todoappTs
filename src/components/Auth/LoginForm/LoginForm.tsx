import React from 'react';
import {View} from 'react-native';

import {Formik} from 'formik';

import {TextInput} from '../../General';

interface Props {
  email: string;
  password: string;
}

const initialValues = {
  email: '',
  password: '',
};

const LoginForm: React.FC<Props> = () => {
  const handleFormSubmit = () => {};
  return (
    <View>
      <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
        {({handleChange, handleSubmit, values}) => (
          <View>
            <TextInput onChangeText={handleChange('email')} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default LoginForm;
