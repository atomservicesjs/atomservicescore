import { IEvent } from "./IEvent";

export interface IEventStores<EventID = any, AggregateID = any> {
  queryByID: (scope: string, type: string, eventID: EventID) =>
    Promise<IEvent> | Promise<undefined>;
  queryCurrentVersion: (scope: string, type: string, aggregateID: AggregateID) =>
    Promise<{ type: string; aggregateID: AggregateID; version: number; }>;
  queryEventsByAggregateID: (
    scope: string,
    type: string,
    aggregateID: AggregateID,
    options?: {
      initialVersion?: number;
      limit?: number;
    },
  ) => Promise<IEvent[]>;
  storeEvent: (scope: string, event: IEvent) =>
    Promise<void>;
  storeEvents: (scope: string, events: IEvent[]) =>
    Promise<void>;
  [key: string]: any;
}
