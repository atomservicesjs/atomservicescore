import { IAtomEvent } from "./IAtomEvent";
import { IEvent } from "./IEvent";

export interface IStateHandler<Event extends IAtomEvent = IEvent> {
  name: string;
  apply: (event: Event) => Promise<void>;
}
