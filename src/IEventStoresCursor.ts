import { IEvent } from "./IEvent";

export interface IEventStoresCursor<EventID = any, AggregateID = any> {
  forEach: (callback: (event: IEvent) => void) => Promise<void>;
  hasNext: () => Promise<boolean>;
  next: () => Promise<IEvent>;
  toArray: () => Promise<IEvent[]>;
}
