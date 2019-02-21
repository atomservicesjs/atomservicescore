import { IEvent } from "../IEvent";
import { EventLevel } from "./EventLevel";
import { IPublishingResult } from "./IPublishingResult";

export type EventPublishing = (
  event: IEvent,
  options: { scope: string; level: EventLevel; },
) => Promise<IPublishingResult>;
