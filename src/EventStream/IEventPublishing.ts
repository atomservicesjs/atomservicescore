import { IEvent } from "../IEvent";
import { IStreamMetadata } from "./IStreamMetadata";
import { StreamLevel } from "./StreamLevel";

export interface IEventPublishing {
  publish: (
    event: IEvent,
    metadata: IStreamMetadata,
    on: { scope: string; level: StreamLevel; },
  ) => Promise<{ name: string; type: string; scope: string; level: StreamLevel; }>;
}
