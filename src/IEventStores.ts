import { IEvent } from "./IEvent";

export interface IEventStores<EventID = any, AggregateID = any, CreatedBy = any> {
  close: () =>
    Promise<void>;
  queryByID: <Payloads = any>(eventID: EventID, on: { type: string; scope: string; }) =>
    Promise<IEvent<Payloads, EventID, AggregateID, CreatedBy>> | Promise<undefined>;
  queryCurrentVersion: (aggregateID: AggregateID, on: { type: string; scope: string; }) =>
    Promise<{ type: string; aggregateID: AggregateID; version: number; }>;
  queryEventsByAggregateID: <Payloads = any>(
    aggregateID: AggregateID,
    on: { type: string; scope: string; },
    options?: {
      initialVersion?: number;
      limit?: number;
    },
  ) => Promise<Array<IEvent<Payloads, EventID, AggregateID, CreatedBy>>>;
  storeEvent: <Payloads = any>(event: IEvent<Payloads, EventID, AggregateID, CreatedBy>, scope: string) =>
    Promise<boolean>;
  [key: string]: any;
}
