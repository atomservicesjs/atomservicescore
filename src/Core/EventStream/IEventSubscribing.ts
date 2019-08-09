import { IEvent } from "../../IEvent";
import { EventChannel } from "./EventChannel";
import { IStreamMetadata } from "./IStreamMetadata";
import { StreamLevel } from "./StreamLevel";

export interface IEventSubscribing {
  subscribe: (
    on: { level: StreamLevel; name: string; scope: string; type: string; },
    to: { channel: EventChannel; scope: string; type: string; },
    process: (
      event: IEvent,
      metadata: IStreamMetadata,
      processAck: () => Promise<void>,
    ) => Promise<void>,
  ) => Promise<{
    on: { level: StreamLevel; name: string; scope: string; type: string; };
    to: { channel: EventChannel; scope: string; type: string; };
  }>;
}
