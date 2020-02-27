import { ICommandHandler } from "../ICommandHandler";
import { IEventHandler } from "../IEventHandler";
import { IEventStores } from "../IEventStores";
import { IEventStream } from "../IEventStream";
import { INotifiers } from "../INotifiers";
import { IReaction } from "../IReaction";
import { IStateAccessConnect } from "../IStateAccessConnect";
import { IStateHandler } from "../IStateHandler";
import { IServiceConfigs } from "./IServiceConfigs";
import { IServiceConfigurate } from "./IServiceConfigurate";
import { IServiceIdentifier } from "./IServiceIdentifier";

export interface IServiceDefinition {
  type: string;
  scope: string;
  configs: IServiceConfigs;
  CommandHandlers: ICommandHandler[];
  EventHandlers: IEventHandler[];
  StateHandlers: IStateHandler[];
  Reactions: IReaction[];
  EventStores?: IEventStores;
  EventStream: IEventStream;
  ServiceIdentifier: IServiceIdentifier;
  ServiceConfigurate: IServiceConfigurate;
  Notifiers: INotifiers;
  StateAccessConnect?: IStateAccessConnect;
}
