import { IEvent } from "../IEvent";
import { EventLevel } from "./EventLevel";

export type EventPublishing = (
  event: IEvent,
  options: { scope: string; level: EventLevel; },
) => Promise<void>;
