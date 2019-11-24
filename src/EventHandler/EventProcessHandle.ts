import { IStreamMetadata } from "../EventStream/IStreamMetadata";
import { IEvent } from "../IEvent";
import { AnyProcessResult } from "./AnyProcessResult";

export type EventProcessHandle<Event extends IEvent = IEvent, ProcessResult = AnyProcessResult, State = any> =
  (event: Event, currentState: State, metadata: IStreamMetadata) => Promise<ProcessResult>;
