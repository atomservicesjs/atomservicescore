import { ICommandHandler } from "./ICommandHandler";
import { IEventHandler } from "./IEventHandler";
import { IEventStores } from "./IEventStores";
import { IEventStream } from "./IEventStream";
import { IIdentifier } from "./IIdentifier";
import { IReaction } from "./IReaction";
import { IServiceConfigs } from "./Service/IServiceConfigs";

export interface IService {
  type: string;
  scope?: string;
  configs?: IServiceConfigs;
  CommandHandlers?: ICommandHandler[];
  EventHandlers?: IEventHandler[];
  Reactions?: IReaction[];
  EventStores?: IEventStores;
  EventStream?: IEventStream;
  Identifier?: IIdentifier;
}
