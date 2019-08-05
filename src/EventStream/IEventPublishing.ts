import { IEvent } from "../IEvent";
import { IStreamMetadata } from "./IStreamMetadata";
import { StreamLevel } from "./StreamLevel";

export interface IEventPublishing {
  publish: (
    event: IEvent,
    on: { scope: string; level: StreamLevel; },
    metadata?: IStreamMetadata,
  ) => Promise<{ name: string; type: string; scope: string; level: StreamLevel; }>;
}
