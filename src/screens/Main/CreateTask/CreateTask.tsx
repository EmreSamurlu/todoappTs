import React, {FC, useState} from 'react';
import {View} from 'react-native';

import {Button, Page, TextInput} from '@components';

import {styles} from './CreateTask.styles';

const CreateTask: FC = () => {
  const [title, setTitle] = useState<string>('');
  const [category, setCategory] = useState<string>('');

  //TODO: calendar open model will be implemented

  const handleAddTask = () => {};
  return (
    <Page goBack pageTitle="New Task" pageStyle={styles.page_container}>
      <TextInput
        type={'with_label'}
        placeholder="Title"
        value={title}
        onChangeText={txt => setTitle(txt)}
      />
      <TextInput
        type={'with_label'}
        placeholder="Category"
        value={category}
        onChangeText={txt => setCategory(txt)}
      />
      <TextInput
        label="When?"
        type={'with_label'}
        placeholder="Title"
        value={title}
        onChangeText={txt => setTitle(txt)}
        iconName="calendar-day"
      />

      <Button
        color={'blue'}
        label="Add Task"
        onPress={handleAddTask}
        type={'default'}
      />
    </Page>
  );
};

export default CreateTask;
