import { IEvent } from "./IEvent";

export interface IServiceEventQueryable<EventID = any, AggregateID = any, CreatedBy = any> {
  queryByID: <Payloads = any>(eventID: EventID) =>
    Promise<IEvent<Payloads, EventID, AggregateID, CreatedBy>> | Promise<undefined>;
  queryCurrentVersion: (aggregateID: AggregateID) =>
    Promise<{ type: string; aggregateID: AggregateID; version: number; }>;
  queryEventsByAggregateID: <Payloads = any>(
    aggregateID: AggregateID,
    options?: {
      initialVersion?: number;
      limit?: number;
    },
  ) => Promise<Array<IEvent<Payloads, EventID, AggregateID, CreatedBy>>>;
}
