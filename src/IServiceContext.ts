import { IServiceIdentifier } from "./Context/Service/IServiceIdentifier";
import { EventLevel } from "./EventStreams/EventLevel";
import { IServiceEventStream } from "./IServiceEventStream";

export interface IServiceContext extends IServiceEventStream, IServiceIdentifier  {
  scope: () => string;
  level: (name: string) => EventLevel;
}
