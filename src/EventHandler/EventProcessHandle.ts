import { IStreamMetadata } from "../EventStream/IStreamMetadata";
import { IAtomEvent } from "../IAtomEvent";
import { IEvent } from "../IEvent";
import { AnyProcessResult } from "./AnyProcessResult";

export type EventProcessHandle<Event extends IAtomEvent = IEvent, ProcessResult = AnyProcessResult, State = any> =
  (event: Event, currentState: State, metadata: IStreamMetadata) => Promise<ProcessResult>;
