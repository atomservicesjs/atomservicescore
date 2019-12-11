import { IEventStores } from "./IEventStores";
import { IEventStream } from "./IEventStream";
import { IIdentifier } from "./IIdentifier";
import { INotifier } from "./INotifier";
import { IService } from "./IService";
import { IStateStores } from "./IStateStores";

export interface IServiceContainer {
  scope: string;
  Services: IService[];
  EventStores?: IEventStores;
  StateStores?: IStateStores;
  EventStream?: IEventStream;
  Identifier?: IIdentifier;
  Notifiers?: INotifier[];
}
