export interface INotifyLog {
  action: string;
  component: {
    type: string;
    name: string;
  };
  message: string;
}
