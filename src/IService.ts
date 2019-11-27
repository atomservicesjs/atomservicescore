import { IEventHandler } from "./IEventHandler";
import { IEventStores } from "./IEventStores";
import { IEventStream } from "./IEventStream";
import { IIdentifier } from "./IIdentifier";
import { IServiceConfigs } from "./Service/IServiceConfigs";

export interface IService {
  type: string;
  scope?: string;
  configs?: IServiceConfigs;
  EventHandlers?: IEventHandler[];
  EventStores?: IEventStores;
  EventStream?: IEventStream;
  Identifier?: IIdentifier;
}
