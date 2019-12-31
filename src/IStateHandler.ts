import { IAtomEvent } from "./IAtomEvent";
import { IEvent } from "./IEvent";
import { IServiceStateStores } from "./Service/IServiceStateStores";

export interface IStateHandler<Event extends IAtomEvent = IEvent> {
  name: string;
  apply: (event: Event, Stores: IServiceStateStores) => Promise<void>;
}
