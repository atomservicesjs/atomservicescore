import { IEventStores } from "./IEventStores";
import { IEventStream } from "./IEventStream";
import { IIdentifier } from "./IIdentifier";
import { INotifier } from "./INotifier";
import { IService } from "./IService";

export interface IServiceContainer {
  scope: string;
  Services: IService[];
  EventStores?: IEventStores;
  EventStream?: IEventStream;
  Identifier?: IIdentifier;
  Notifiers?: INotifier[];
}
