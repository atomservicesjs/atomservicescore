import { IEvent } from "../IEvent";
import { EventLevel } from "./EventLevel";

export interface IEventPublishing {
  publish: (
    event: IEvent,
    on: { name: string; type: string; scope: string; level: EventLevel; },
  ) => Promise<void>;
}
