import Calendar, {type ICalendarProps} from './Calendar';
import type {Meta, StoryObj} from '@storybook/react-native';

const CalendarMeta: Meta<ICalendarProps> = {
  title: 'Calendar',
  component: Calendar,
};

export default CalendarMeta;
export const Basic: StoryObj = {};
