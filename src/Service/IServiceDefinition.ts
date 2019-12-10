import { ICommandHandler } from "../ICommandHandler";
import { IEventHandler } from "../IEventHandler";
import { IEventStores } from "../IEventStores";
import { IEventStream } from "../IEventStream";
import { IReaction } from "../IReaction";
import { IServiceConfigs } from "./IServiceConfigs";
import { IServiceConfigurate } from "./IServiceConfigurate";
import { IServiceIdentifier } from "./IServiceIdentifier";

export interface IServiceDefinition {
  type: string;
  scope: string;
  configs: IServiceConfigs;
  CommandHandlers: ICommandHandler[];
  EventHandlers: IEventHandler[];
  Reactions: IReaction[];
  EventStream: IEventStream;
  ServiceConfigurate: IServiceConfigurate;
  ServiceIdentifier: IServiceIdentifier;
  EventStores?: IEventStores;
}
