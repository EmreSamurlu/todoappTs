import React, {useEffect} from 'react';
import {View} from 'react-native';

import {useNavigation, useTheme} from '@react-navigation/native';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';

import {Button, Page, TaskItem, Text, Visual} from '@components';
import {getTaskListThunk} from '@features';
import {RootState} from '@redux/store';
import {routeNames} from '@routes';

import {styles} from './TaskList.styles';

const TaskList = () => {
  const dispatch = useDispatch<any>();
  const {colors} = useTheme();
  const navigation = useNavigation();

  const {today} = useSelector((state: RootState) => state.calendar);
  const {tasks} = useSelector((state: RootState) => state.tasks);

  useEffect(() => {
    if (!tasks.length) {
      dispatch(getTaskListThunk());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasks.length]);

  const completedTasks = tasks.filter(
    task =>
      moment(task.date).format('MMMM DD, YYYY') === today &&
      task.isCompleted === true,
  );
  const incompleteTasks = tasks.filter(
    task =>
      moment(task.date).format('MMMM DD, YYYY') === today &&
      task.isCompleted === false,
  );

  const handleAddButton = () => {
    navigation.navigate(routeNames.CreateTask as never);
  };

  //* avatar yerine varsa kullanıcının resmi gelecek.
  return (
    <Page goBack={false} pageStyle={styles.page_container} pageTitle="">
      <View
        style={[styles.header_container, {borderBottomColor: colors.border}]}>
        <View style={styles.header_top_container}>
          <Text
            text={today}
            textStyle={[styles.header, {color: colors.text}]}
          />
          <Visual image={'avatar'} imageStyle={styles.avatar} />
        </View>
        <View style={styles.header_bottom_container}>
          <Text
            text={`${completedTasks.length} completed, `}
            textStyle={[styles.count_text, {color: colors.text}]}
          />
          <Text
            text={`${incompleteTasks.length} incomplete`}
            textStyle={[styles.count_text, {color: colors.text}]}
          />
        </View>
      </View>
      <View style={styles.body_container}>
        <View style={styles.incomplete_container}>
          <Text
            text="Incomplete"
            textStyle={[styles.body_headers, {color: colors.text}]}
          />
          {incompleteTasks.map(task => (
            <TaskItem
              key={task.id}
              taskCategory={task.category}
              taskLabel={task.title}
              taskStatus={task.isCompleted}
            />
          ))}
        </View>
        <View style={styles.completed_container}>
          <Text
            text="Completed"
            textStyle={[styles.body_headers, {color: colors.text}]}
          />
          {completedTasks.map(task => (
            <TaskItem
              key={task.id}
              taskCategory={task.category}
              taskLabel={task.title}
              taskStatus={task.isCompleted}
            />
          ))}
        </View>
      </View>
      <View style={styles.add_task_button}>
        <Button
          onPress={handleAddButton}
          label=""
          type={'icon'}
          iconName="plus"
          color={'blue'}
          iconColor={colors.buttonText}
        />
      </View>
    </Page>
  );
};

export default TaskList;
