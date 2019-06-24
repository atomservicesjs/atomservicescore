import { IEvent } from "../IEvent";
import { EventChannel } from "./EventChannel";
import { StreamLevel } from "./StreamLevel";

export interface IEventSubscribing {
  subscribe: (
    on: { name: string; type: string; scope: string; level: StreamLevel; },
    to: { channel: EventChannel; type: string; scope: string; },
    process: (event: IEvent, processAck: () => Promise<void>) => Promise<void>,
  ) => Promise<{
    on: { name: string; type: string; scope: string; level: StreamLevel; };
    to: { channel: EventChannel; type: string; scope: string; };
  }>;
}
