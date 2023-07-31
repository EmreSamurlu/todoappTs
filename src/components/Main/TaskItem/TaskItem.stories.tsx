import TaskItem, {type TaskItemProps} from './TaskItem';
import type {Meta, StoryObj} from '@storybook/react-native';

const TaskItemMeta: Meta<TaskItemProps> = {
  title: 'TaskItem',
  component: TaskItem,
  argTypes: {
    onPress: {action: 'pressed the TaskItem'},
  },
  args: {
    label: 'TaskItem',
    type: 'default',
  },
};

export default TaskItemMeta;

export const Basic: StoryObj<TaskItemProps> = {
  args: {
    label: 'TaskItem',
    type: 'default',
  },
};
export const Outline: StoryObj<TaskItemProps> = {
  args: {
    label: 'TaskItem',
    type: 'outline',
    iconName: 'plus',
  },
};
export const Icon: StoryObj<TaskItemProps> = {
  args: {
    type: 'icon',
    iconName: 'plus',
  },
};
