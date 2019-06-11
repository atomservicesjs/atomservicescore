import { StreamLevel } from "./EventStream/StreamLevel";
import { IEvent } from "./IEvent";

export interface IServiceEventStream {
  type: () => string;
  dispatch: (event: IEvent) => Promise<{ name: string; type: string; scope: string; level: StreamLevel; }>;
}
