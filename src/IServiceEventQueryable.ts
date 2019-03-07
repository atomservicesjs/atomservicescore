import { IAtomEvent } from "./IAtomEvent";

export interface IServiceEventQueryable<AggregateID = any, EventID = any, CreatedBy = any> {
  queryByID: (eventID: EventID) =>
    Promise<IAtomEvent> | Promise<undefined>;
  queryCurrentVersion: (aggregateID: AggregateID) =>
    Promise<{ type: string; aggregateID: AggregateID; version: number; }>;
  queryEventsByAggregateID: <Payloads = any>(
    aggregateID: AggregateID,
    options?: { initialVersion?: number; limit?: number; },
  ) => Promise<IAtomEvent[]>;
}
