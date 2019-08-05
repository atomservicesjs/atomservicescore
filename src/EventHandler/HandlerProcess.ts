import { IStreamMetadata } from "../EventStream/IStreamMetadata";
import { IEvent } from "../IEvent";

export type HandlerProcess<Event extends IEvent = IEvent, ProcessResult = any, State = any> =
  (event: Event, currentState: State, metadata: IStreamMetadata) => Promise<ProcessResult>;
