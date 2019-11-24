import { AnyProcessResult } from "./EventHandler/AnyProcessResult";
import { EventProcessEffectHandle } from "./EventHandler/EventProcessEffectHandle";
import { EventProcessHandle } from "./EventHandler/EventProcessHandle";
import { IEvent } from "./IEvent";

type AnyState = any;

export interface IEventHandler<Event extends IEvent = IEvent, ProcessResult = AnyProcessResult, State = AnyState> {
  name: string;
  process: EventProcessHandle<Event, ProcessResult, State>;
  processEffect?: EventProcessEffectHandle<Event, ProcessResult>;
}
