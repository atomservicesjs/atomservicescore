export interface INotifyObject<Fields = any>  {
  action: string;
  component: {
    type: string;
    name: string;
  };
  fields: Fields;
  message: string;
}
