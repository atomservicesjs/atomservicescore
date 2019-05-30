import { IEvent } from "../IEvent";

export type EventProcess<Event extends IEvent = IEvent, ProcessResult = any> =
  (event: Event) => Promise<ProcessResult>;
