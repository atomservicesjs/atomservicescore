import { IStreamMetadata } from "../EventStream/IStreamMetadata";
import { IAtomEvent } from "../IAtomEvent";
import { IEvent } from "../IEvent";
import { IStateApplier } from "../IStateApplier";
import { AnyProcessResult } from "./AnyProcessResult";

export type EventProcessHandle<Event extends IAtomEvent = IEvent, ProcessResult = AnyProcessResult> =
  (event: Event, metadata: IStreamMetadata, StateApplier: IStateApplier) => Promise<ProcessResult>;
