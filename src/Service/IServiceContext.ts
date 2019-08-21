import { StreamLevel } from "../EventStream/StreamLevel";
import { IEvent } from "../IEvent";

export interface IServiceContext<AggregateID = any, EventID = any> {
  scope: () => string;
  type: () => string;
  AggregateID: () => AggregateID;
  EventID: () => EventID;
  dispatch: (event: IEvent) => Promise<{ level: StreamLevel; name: string; scope: string; type: string; }>;
  directTo: (ref: string, data: any) => Promise<any>;
  listenTo: (ref: string, listener: (data: any) => any) => Promise<any>;
  queryCurrentVersion: (aggregateID: AggregateID) => Promise<{ type: string; aggregateID: AggregateID; version: number; }>;
}
