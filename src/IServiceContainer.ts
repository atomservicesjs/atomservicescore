import { IEventStores } from "./IEventStores";
import { IEventStream } from "./IEventStream";
import { IIdentifier } from "./IIdentifier";
import { INotifier } from "./INotifier";
import { IService } from "./IService";
import { IStateStoresConnector } from "./IStateStoresConnector";

export interface IServiceContainer {
  scope: string;
  Services: IService[];
  EventStores?: IEventStores;
  EventStream?: IEventStream;
  Identifier?: IIdentifier;
  Notifiers?: INotifier[];
  StateStores?: IStateStoresConnector;
}
