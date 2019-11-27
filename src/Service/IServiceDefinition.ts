import { IEventHandler } from "../IEventHandler";
import { IEventStores } from "../IEventStores";
import { IEventStream } from "../IEventStream";
import { IServiceConfigs } from "./IServiceConfigs";
import { IServiceIdentifier } from "./IServiceIdentifier";
import { IServiceStreamLevel } from "./IServiceStreamLevel";

export interface IServiceDefinition {
  type: string;
  scope: string;
  configs: IServiceConfigs;
  EventHandlers: IEventHandler[];
  EventStream: IEventStream;
  ServiceIdentifier: IServiceIdentifier;
  ServiceStreamLevel: IServiceStreamLevel;
  EventStores?: IEventStores;
}
