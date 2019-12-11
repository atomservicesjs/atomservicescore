import { IStreamMetadata } from "../EventStream/IStreamMetadata";
import { IAtomEvent } from "../IAtomEvent";
import { IEvent } from "../IEvent";
import { IServiceStateStores } from "../Service/IServiceStateStores";
import { AnyProcessResult } from "./AnyProcessResult";

export type EventProcessHandle<Event extends IAtomEvent = IEvent, ProcessResult = AnyProcessResult> =
  (event: Event, metadata: IStreamMetadata, StateStores?: IServiceStateStores) => Promise<ProcessResult>;
