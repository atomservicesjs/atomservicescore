import { IEvent } from "../IEvent";
import { EventChannel } from "./EventChannel";
import { EventLevel } from "./EventLevel";

export interface IEventSubscribing {
  subscribe: (
    on: { name: string; type: string; scope: string; level: EventLevel; },
    to: { channel: EventChannel; type: string; scope: string; },
    process: (event: IEvent, processAck: () => void) => Promise<void>,
  ) => Promise<void>;
}
