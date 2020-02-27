export interface IServiceNotifyData {
  action: string;
  level: string;
  message: string;
  fields?: {
    [field: string]: any;
  };
  obj?: {
    [key: string]: any;
  };
}
