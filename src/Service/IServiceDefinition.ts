import { ICommandHandler } from "../ICommandHandler";
import { IEventHandler } from "../IEventHandler";
import { IEventStores } from "../IEventStores";
import { IEventStream } from "../IEventStream";
import { INotifiers } from "../INotifiers";
import { IReaction } from "../IReaction";
import { IServiceConfigs } from "./IServiceConfigs";
import { IServiceConfigurate } from "./IServiceConfigurate";
import { IServiceIdentifier } from "./IServiceIdentifier";
import { IServiceStateStores } from "./IServiceStateStores";

export interface IServiceDefinition {
  type: string;
  scope: string;
  configs: IServiceConfigs;
  CommandHandlers: ICommandHandler[];
  EventHandlers: IEventHandler[];
  Reactions: IReaction[];
  EventStores?: IEventStores;
  EventStream: IEventStream;
  ServiceIdentifier: IServiceIdentifier;
  ServiceConfigurate: IServiceConfigurate;
  ServiceStateStores?: IServiceStateStores;
  Notifiers: INotifiers;
}
