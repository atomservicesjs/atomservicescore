export interface INotifyLog {
  action: string;
  component: {
    type: string;
    name: string;
  };
  level: string;
  message: string;
  fields?: {
    [field: string]: any;
  };
}
