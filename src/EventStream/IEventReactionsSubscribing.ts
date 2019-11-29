import { IEvent } from "../IEvent";
import { IStreamMetadata } from "./IStreamMetadata";

export interface IEventReactionsSubscribing {
  subscribe: (service: {
    scope: string;
    type: string;
    reactions: Array<{ scope: string; type: string; name: string; }>;
    process: (
      event: IEvent,
      metadata: IStreamMetadata,
      processAck: () => Promise<void>,
    ) => Promise<void>,
  }) => Promise<void>;
}
