import { IStreamMetadata } from "../EventStream/IStreamMetadata";
import { IEvent } from "../IEvent";
import { IServiceContext } from "../Service/IServiceContext";
import { AnyProcessResult } from "./AnyProcessResult";

export type EventProcessEffectHandle<Event extends IEvent = IEvent, ProcessResult = AnyProcessResult> = (
  process: {
    event: Event;
    result: ProcessResult;
    metadata: IStreamMetadata;
  },
  resulting: (result: any) => Promise<void>,
  context: IServiceContext,
) => Promise<void>;
