import { INotifyLog } from "./INotifyLog";
import { INotifyObject } from "./INotifyObject";

export interface INotifier {
  log: (obj: INotifyLog) => void;
  on: (obj: INotifyObject) => void;
}
