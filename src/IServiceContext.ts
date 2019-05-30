import { EventLevel } from "./EventStreams/EventLevel";
import { IServiceEventStream } from "./IServiceEventStream";
import { IServiceIdentifier } from "./IServiceIdentifier";

export interface IServiceContext extends IServiceEventStream, IServiceIdentifier {
  scope: () => string;
  type: () => string;
  level: (name: string) => EventLevel;
}
