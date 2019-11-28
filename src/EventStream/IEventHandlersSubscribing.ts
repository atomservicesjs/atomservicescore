import { IEvent } from "../IEvent";
import { IStreamMetadata } from "./IStreamMetadata";
import { StreamLevel } from "./StreamLevel";

export interface IEventHandlersSubscribing {
  subscribe: (
    to: {
      scope: string;
      type: string;
    },
    events: {
      [name: string]: StreamLevel;
    },
    process: (
      event: IEvent,
      metadata: IStreamMetadata,
      processAck: () => Promise<void>,
    ) => Promise<void>,
  ) => Promise<void>;
}
