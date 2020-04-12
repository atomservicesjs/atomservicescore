import { IEvent } from "../IEvent";
import { IServiceNotifyData } from "./IServiceNotifyData";

export interface IServiceContext<AggregateID = any, EventID = any> {
  scope: () => string;
  type: () => string;
  AggregateID: () => AggregateID;
  EventID: () => EventID;
  dispatch: (event: IEvent) => Promise<void>;
  directTo: (ref: string, data: any) => Promise<void>;
  listenTo: (ref: string, listener: (data: any) => any) => Promise<void>;
  queryCurrentVersion: (aggregateID: AggregateID) => Promise<{ type: string; aggregateID: AggregateID; version: number; }>;
  notify: (data: IServiceNotifyData) => void;
}
