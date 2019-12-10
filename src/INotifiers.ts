import { INotifyData } from "./INotifyData";

export interface INotifiers {
  emit: (data: INotifyData) => void;
  error: (data: INotifyData, error: Error) => void;
}
