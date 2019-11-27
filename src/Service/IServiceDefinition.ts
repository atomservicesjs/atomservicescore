import { IEventHandler } from "../IEventHandler";
import { IEventStores } from "../IEventStores";
import { IEventStream } from "../IEventStream";
import { IServiceConfigs } from "./IServiceConfigs";
import { IServiceIdentifier } from "./IServiceIdentifier";

export interface IServiceDefinition {
  type: string;
  scope: string;
  configs: IServiceConfigs;
  EventHandlers: IEventHandler[];
  EventStream: IEventStream;
  Identifier: IServiceIdentifier;
  EventStores?: IEventStores;
}
