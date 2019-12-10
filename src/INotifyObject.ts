export interface INotifyObject {
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
  obj?: {
    [key: string]: any;
  };
}
