import { IEvent } from "../IEvent";
import { IStreamMetadata } from "./IStreamMetadata";
import { StreamLevel } from "./StreamLevel";

export interface IEventPublishing {
  publish: (
    on: { level: StreamLevel; scope: string; },
    metadata: IStreamMetadata,
    event: IEvent,
  ) => Promise<{ level: StreamLevel; scope: string; type: string; name: string; }>;
}
