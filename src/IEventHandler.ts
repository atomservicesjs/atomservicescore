import { AnyProcessResult } from "./EventHandler/AnyProcessResult";
import { EventProcessEffectHandle } from "./EventHandler/EventProcessEffectHandle";
import { EventProcessHandle } from "./EventHandler/EventProcessHandle";
import { IAtomEvent } from "./IAtomEvent";
import { IEvent } from "./IEvent";

export interface IEventHandler<Event extends IAtomEvent = IEvent, ProcessResult = AnyProcessResult> {
  name: string;
  process: EventProcessHandle<Event, ProcessResult>;
  processEffect?: EventProcessEffectHandle<Event, ProcessResult>;
}
