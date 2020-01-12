import { IEvent } from "./IEvent";

export interface IEventStoresCursor<EventID = any, AggregateID = any> {
  hasNext: () => Promise<boolean>;
  next: () => Promise<IEvent>;
  toArray: () => Promise<IEvent[]>;
}
