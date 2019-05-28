import { EventLevel } from "./EventStreams/EventLevel";
import { IServiceEventStream } from "./IServiceEventStream";

export interface IServiceContext extends IServiceEventStream {
  scope: () => string;
  type: () => string;
  level: (name: string) => EventLevel;
}
