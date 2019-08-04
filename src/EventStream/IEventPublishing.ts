import { IEvent } from "../IEvent";
import { StreamLevel } from "./StreamLevel";

export interface IEventPublishing {
  publish: (
    event: IEvent,
    on: { scope: string; level: StreamLevel; },
    metadata?: {
      isReplay: boolean;
    }) =>
    Promise<{ name: string; type: string; scope: string; level: StreamLevel; }>;
}
