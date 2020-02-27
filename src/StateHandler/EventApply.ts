import { IAtomEvent } from "../IAtomEvent";
import { IEvent } from "../IEvent";

export type EventApply<Event extends IAtomEvent = IEvent> = (event: Event) => Promise<void>;
