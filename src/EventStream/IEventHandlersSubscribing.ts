import { IEvent } from "../IEvent";
import { IStreamMetadata } from "./IStreamMetadata";
import { StreamLevel } from "./StreamLevel";

export interface IEventHandlersSubscribing {
  subscribe: (service: {
    scope: string;
    type: string;
    handlers: Array<{ name: string; level: StreamLevel; }>;
    process: (
      event: IEvent,
      metadata: IStreamMetadata,
      processAck: () => Promise<void>,
    ) => Promise<void>,
  }) => Promise<void>;
}
