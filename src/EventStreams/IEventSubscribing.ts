import { EventChannel } from "./EventChannel";
import { EventLevel } from "./EventLevel";
import { EventProcess } from "./EventProcess";

export interface IEventSubscribing {
  subscribe: (
    on: { name: string; type: string; scope: string; level: EventLevel; },
    to: { channel: EventChannel; type: string; scope: string; },
    process: EventProcess,
  ) => Promise<void>;
}
