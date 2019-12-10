export interface INotifyObject {
  action: string;
  component: {
    type: string;
    name: string;
  };
  fields?: {
    [field: string]: any;
  };
  obj?: {
    [key: string]: any;
  };
  message: string;
}
