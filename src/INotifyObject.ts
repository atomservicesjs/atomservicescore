export interface INotifyObject {
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
  obj?: {
    [key: string]: any;
  };
}
