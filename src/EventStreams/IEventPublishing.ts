import { IEvent } from "../IEvent";
import { EventLevel } from "./EventLevel";

export interface IEventPublishing {
  publish: (event: IEvent, options: { scope: string; level: EventLevel; }) => Promise<void>;
}
