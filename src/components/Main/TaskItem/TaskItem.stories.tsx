import TaskItem, {type TaskItemProps} from './TaskItem';
import type {Meta, StoryObj} from '@storybook/react-native';

const TaskItemMeta: Meta<TaskItemProps> = {
  title: 'TaskItem',
  component: TaskItem,
  argTypes: {},
  args: {
    taskLabel: 'Task Item',
    taskCategory: 'Task Category',
  },
};

export default TaskItemMeta;

export const Basic: StoryObj<TaskItemProps> = {};
