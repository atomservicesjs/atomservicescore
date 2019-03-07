import { EventLevel } from "./EventStreams/EventLevel";
import { IServiceEventQueryable } from "./IServiceEventQueryable";
import { IServiceEventStream } from "./IServiceEventStream";
import { IServiceIdentifier } from "./IServiceIdentifier";

export interface IServiceContext<AggregateID = any, EventID = any> extends
  IServiceEventQueryable<AggregateID, EventID>,
  IServiceEventStream,
  IServiceIdentifier<AggregateID, EventID> {
  scope: () => string;
  type: () => string;
  level: (name: string) => EventLevel;
}
