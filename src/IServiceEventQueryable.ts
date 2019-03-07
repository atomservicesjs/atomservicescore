import { IEvent } from "./IEvent";

export interface IServiceEventQueryable<AggregateID = any, EventID = any> {
  queryByID: (eventID: EventID) =>
    Promise<IEvent> | Promise<undefined>;
  queryCurrentVersion: (aggregateID: AggregateID) =>
    Promise<{ type: string; aggregateID: AggregateID; version: number; }>;
  queryEventsByAggregateID: (
    aggregateID: AggregateID,
    options?: { initialVersion?: number; limit?: number; },
  ) => Promise<IEvent[]>;
}
