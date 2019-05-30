import { IEvent } from "../IEvent";
import { IServiceContext } from "../IServiceContext";

export type EventProcessEffect<Event extends IEvent = IEvent, ProcessResult = any> = (
  process: {
    event: Event;
    result: ProcessResult;
  },
  resulting: (event: Event, resulting: any) => Promise<any>,
  context?: IServiceContext,
) => Promise<void>;
