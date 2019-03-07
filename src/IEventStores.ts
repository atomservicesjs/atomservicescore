import { IAtomEvent } from "./IAtomEvent";

export interface IEventStores<EventID = any, AggregateID = any> {
  close: () =>
    Promise<void>;
  queryByID: (eventID: EventID, on: { type: string; scope: string; }) =>
    Promise<IAtomEvent> | Promise<undefined>;
  queryCurrentVersion: (aggregateID: AggregateID, on: { type: string; scope: string; }) =>
    Promise<{ type: string; aggregateID: AggregateID; version: number; }>;
  queryEventsByAggregateID: (
    aggregateID: AggregateID,
    on: { type: string; scope: string; },
    options?: {
      initialVersion?: number;
      limit?: number;
    },
  ) => Promise<IAtomEvent[]>;
  storeEvent: (event: IAtomEvent, scope: string) =>
    Promise<string>;
  [key: string]: any;
}
