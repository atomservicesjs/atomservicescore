import { IEvent } from "../IEvent";

export type EventProcess<Event extends IEvent = IEvent, ProcessResult = any, State = any> =
  (event: Event, currentState: State) => Promise<ProcessResult>;
