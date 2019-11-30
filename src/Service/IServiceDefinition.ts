import { IEventHandler } from "../IEventHandler";
import { IEventStores } from "../IEventStores";
import { IEventStream } from "../IEventStream";
import { IReaction } from "../IReaction";
import { IServiceConfigs } from "./IServiceConfigs";
import { IServiceIdentifier } from "./IServiceIdentifier";
import { IServiceStream } from "./IServiceStream";

export interface IServiceDefinition {
  type: string;
  scope: string;
  configs: IServiceConfigs;
  EventHandlers: IEventHandler[];
  Reactions: IReaction[];
  EventStream: IEventStream;
  ServiceIdentifier: IServiceIdentifier;
  ServiceStream: IServiceStream;
  EventStores?: IEventStores;
}
