import { IEvent } from "./IEvent";

export interface IEventStores<EventID = any, AggregateID = any> {
  queryByID: (scope: string, type: string, eventID: EventID) =>
    Promise<IEvent> | Promise<undefined>;
  queryCurrentVersion: (scope: string, type: string, aggregateID: AggregateID) =>
    Promise<{ type: string; aggregateID: AggregateID; version: number; }>;
  queryEventsByAggregateID: (
    type: string,
    scope: string,
    aggregateID: AggregateID,
    options?: {
      initialVersion?: number;
      limit?: number;
    },
  ) => Promise<IEvent[]>;
  storeEvent: (scope: string, event: IEvent) =>
    Promise<string>;
  [key: string]: any;
}
