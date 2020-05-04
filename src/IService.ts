import { ICommandHandler } from "./ICommandHandler";
import { IEventHandler } from "./IEventHandler";
import { IEventStores } from "./IEventStores";
import { IEventStream } from "./IEventStream";
import { IIdentifier } from "./IIdentifier";
import { INotifier } from "./INotifier";
import { IReaction } from "./IReaction";
import { ISFComponents } from "./ISFComponents";
import { IStateAccessConnect } from "./IStateAccessConnect";
import { IStateHandler } from "./IStateHandler";
import { IServiceConfigs } from "./Service/IServiceConfigs";

export interface IService {
  type: string;
  scope?: string;
  configs?: IServiceConfigs;
  CommandHandlers?: ICommandHandler[];
  EventHandlers?: IEventHandler[];
  StateHandlers?: IStateHandler[];
  Reactions?: IReaction[];
  SFC?: { [name: string]: ISFComponents; };
  EventStores?: IEventStores;
  EventStream?: IEventStream;
  Identifier?: IIdentifier;
  StateAccessConnect?: IStateAccessConnect;
  Notifiers?: INotifier[];
}
