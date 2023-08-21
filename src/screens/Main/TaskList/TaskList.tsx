import {View, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';

const TaskList = () => {
  const {token} = useSelector((state: RootState) => state.auth);
  console.log('TOKEN', token);
  return (
    <View>
      <Text>TaskList</Text>
    </View>
  );
};

export default TaskList;
