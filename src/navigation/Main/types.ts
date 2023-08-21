type options = {
  tabBarIcon: ({color}: {color: string}) => any;
  tabBarLabel: ({focused, color}: {focused: boolean; color: string}) => any;
};
export interface Props {
  name: string;
  component: any;
  options: options;
}
