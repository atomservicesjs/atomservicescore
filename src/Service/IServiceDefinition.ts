import { IEventHandler } from "../IEventHandler";
import { IEventStores } from "../IEventStores";
import { IEventStream } from "../IEventStream";
import { IServiceConfigs } from "./IServiceConfigs";

export interface IServiceDefinition {
  type: string;
  configs?: IServiceConfigs;
  EventHandlers?: IEventHandler[];
  EventStores?: IEventStores;
  EventStream?: IEventStream;
}
