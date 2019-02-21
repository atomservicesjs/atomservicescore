import { EventLevel } from "./EventStreams/EventLevel";
import { IServiceEventQueryable } from "./IServiceEventQueryable";
import { IServiceEventStream } from "./IServiceEventStream";
import { IServiceIdentifier } from "./IServiceIdentifier";
import { IStateQueryStream } from "./IStateQueryStream";

export interface IServiceContext extends
  IServiceEventQueryable,
  IServiceEventStream,
  IServiceIdentifier,
  IStateQueryStream {
  scope: () => string;
  type: () => string;
  level: (name: string) => EventLevel;
}
