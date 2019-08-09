import { IEvent } from "../../IEvent";
import { IStreamMetadata } from "./IStreamMetadata";
import { StreamLevel } from "./StreamLevel";

export interface IEventPublishing {
  publish: (
    event: IEvent,
    metadata: IStreamMetadata,
    on: { level: StreamLevel; scope: string; },
  ) => Promise<{ level: StreamLevel; name: string; scope: string; type: string; }>;
}
