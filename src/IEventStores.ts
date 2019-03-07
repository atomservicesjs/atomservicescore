import { IEvent } from "./IEvent";

export interface IEventStores<EventID = any, AggregateID = any> {
  close: () =>
    Promise<void>;
  queryByID: (eventID: EventID, on: { type: string; scope: string; }) =>
    Promise<IEvent> | Promise<undefined>;
  queryCurrentVersion: (aggregateID: AggregateID, on: { type: string; scope: string; }) =>
    Promise<{ type: string; aggregateID: AggregateID; version: number; }>;
  queryEventsByAggregateID: (
    aggregateID: AggregateID,
    on: { type: string; scope: string; },
    options?: {
      initialVersion?: number;
      limit?: number;
    },
  ) => Promise<IEvent[]>;
  storeEvent: (event: IEvent, scope: string) =>
    Promise<string>;
  [key: string]: any;
}
