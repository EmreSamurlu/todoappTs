import React, {FC} from 'react';
import {View} from 'react-native';

import {useTheme} from '@react-navigation/native';

import {Text} from '../../General';
import CheckBox from '../CheckBox/CheckBox';
import styles from './TaskItem.styles';

export interface TaskItemProps {
  taskLabel: string;
  taskCategory: string;
  taskStatus: boolean;
}

const TaskItem: FC<TaskItemProps> = ({taskLabel, taskCategory, taskStatus}) => {
  const {colors} = useTheme();
  //TODO: task status düzenlenecek
  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
        <CheckBox checkStatus={taskStatus} />
        <Text
          textStyle={[
            styles.task_label,
            {
              color: colors.text,
            },
          ]}
          text={taskLabel}
        />
      </View>
      {!taskStatus && (
        <Text
          textStyle={[
            styles.task_category,
            {
              color: colors.secondaryText,
            },
          ]}
          text={taskCategory}
        />
      )}
    </View>
  );
};

export default TaskItem;
