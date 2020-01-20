import { IEvent } from "./IEvent";
import { IEventStoresCursor } from "./IEventStoresCursor";

export interface IEventStores<EventID = any, AggregateID = any> {
  countAggregateIDs: (
    scope: string,
    type: string,
    options?: {
      from?: Date;
      to?: Date;
    },
  ) => Promise<number>;
  countEvents: (
    scope: string,
    type: string,
    options?: {
      from?: Date;
      to?: Date;
    },
  ) => Promise<number>;
  fetchAggregateIDs: (
    scope: string,
    type: string,
    options?: {
      from?: Date;
      to?: Date;
    },
  ) => Promise<IEventStoresCursor<AggregateID>>;
  fetchEvents: (
    scope: string,
    type: string,
    options?: {
      from?: Date;
      to?: Date;
    },
  ) => Promise<IEventStoresCursor<IEvent>>;
  queryByEventID: (scope: string, type: string, eventID: EventID) =>
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
  ) => Promise<IEventStoresCursor>;
  storeEvent: (scope: string, event: IEvent) =>
    Promise<void>;
  storeEvents: (scope: string, events: IEvent[]) =>
    Promise<void>;
  [key: string]: any;
}
