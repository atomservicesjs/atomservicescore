import { AnyProcessResult } from "./EventHandler/AnyProcessResult";
import { AnyState } from "./EventHandler/AnyState";
import { EventProcessEffectHandle } from "./EventHandler/EventProcessEffectHandle";
import { EventProcessHandle } from "./EventHandler/EventProcessHandle";
import { IAtomEvent } from "./IAtomEvent";
import { IEvent } from "./IEvent";

export interface IEventHandler<Event extends IAtomEvent = IEvent, ProcessResult = AnyProcessResult, State = AnyState> {
  name: string;
  process: EventProcessHandle<Event, ProcessResult, State>;
  processEffect?: EventProcessEffectHandle<Event, ProcessResult>;
}
