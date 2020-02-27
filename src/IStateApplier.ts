import { IAtomEvent } from "./IAtomEvent";
import { IEvent } from "./IEvent";

export interface IStateApplier<Event extends IAtomEvent = IEvent> {
  apply: (event: Event) => Promise<void>;
}
