import { AnyProcessResult } from "./EventHandler/AnyProcessResult";
import { AnyState } from "./EventHandler/AnyState";
import { EventProcessEffectHandle } from "./EventHandler/EventProcessEffectHandle";
import { EventProcessHandle } from "./EventHandler/EventProcessHandle";
import { IEvent } from "./IEvent";

export interface IEventHandler<Event extends IEvent = IEvent, ProcessResult = AnyProcessResult, State = AnyState> {
  name: string;
  process: EventProcessHandle<Event, ProcessResult, State>;
  processEffect?: EventProcessEffectHandle<Event, ProcessResult>;
}
