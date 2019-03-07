import { IAtomEvent } from "./IAtomEvent";

export interface IEventStores<EventID = any, AggregateID = any, CreatedBy = any> {
  close: () =>
    Promise<void>;
  queryByID: <Event extends IAtomEvent = IAtomEvent>(eventID: EventID, on: { type: string; scope: string; }) =>
    Promise<Event> | Promise<undefined>;
  queryCurrentVersion: (aggregateID: AggregateID, on: { type: string; scope: string; }) =>
    Promise<{ type: string; aggregateID: AggregateID; version: number; }>;
  queryEventsByAggregateID: <Event extends IAtomEvent = IAtomEvent>(
    aggregateID: AggregateID,
    on: { type: string; scope: string; },
    options?: {
      initialVersion?: number;
      limit?: number;
    },
  ) => Promise<Event[]>;
  storeEvent: <Event extends IAtomEvent = IAtomEvent>(event: Event, scope: string) =>
    Promise<string>;
  [key: string]: any;
}
