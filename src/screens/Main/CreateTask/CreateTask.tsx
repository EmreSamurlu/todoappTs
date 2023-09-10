import React, {FC, useState} from 'react';
import {View} from 'react-native';

import {useTheme} from '@react-navigation/native';
import {showMessage} from 'react-native-flash-message';
import {useDispatch} from 'react-redux';

import {Button, Calendar, Modal, Page, TextInput} from '@components';
import {createTaskThunk} from '@features';
import {AppDispatch} from '@redux/store';
import {getDimensions} from '@utils';

import {styles} from './CreateTask.styles';

const CreateTask: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {colors} = useTheme();
  const [title, setTitle] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [calendarOpen, setCalendarOpen] = useState<boolean>(false);

  //TODO: add task function will be implemented
  const handleAddTask = () => {
    const newTask = {
      title,
      category,
      date: selectedDate,
      isCompleted: false,
    };
    if (!title || !category || !selectedDate) {
      const missingFields = [];
      !title && missingFields.push('Title');
      !category && missingFields.push('Category');
      !selectedDate && missingFields.push('Date');
      showMessage({
        message: `Missing Fields: ${missingFields.join(
          ', ',
        )} \nPlease fill all fields...`,
        type: 'warning',
      });
      return;
    }
    dispatch(createTaskThunk({task: newTask}));
  };

  const handleDayPress = (date: any) => {
    setSelectedDate(date.dateString);
    setModalVisible(!modalVisible);
    setCalendarOpen(false);
  };
  const handleBackdropPress = () => {
    setModalVisible(!modalVisible);
    setCalendarOpen(false);
  };

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
      <Button
        color={'blue'}
        label={selectedDate || 'Select Date'}
        onPress={() => setCalendarOpen(true)}
        type={'outline'}
        iconName="calendar-day"
        iconColor={colors.blue}
      />

      <Button
        color={'blue'}
        label="Add Task"
        onPress={handleAddTask}
        type={'default'}
      />
      {calendarOpen && (
        <Modal
          onBackdropPress={() => handleBackdropPress()}
          deviceHeight={+getDimensions().height}
          deviceWidth={+getDimensions().width}
          isVisible={calendarOpen}>
          <View style={styles.calendar_container}>
            <Calendar onDayPress={date => handleDayPress(date)} />
          </View>
        </Modal>
      )}
    </Page>
  );
};

export default CreateTask;
