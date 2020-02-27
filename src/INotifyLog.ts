export interface INotifyLog {
  action: string;
  level: string;
  component: {
    type: string;
    name: string;
  };
  message: string;
  fields?: {
    [field: string]: any;
  };
}
