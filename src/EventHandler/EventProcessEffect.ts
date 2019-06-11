import { IEvent } from "../IEvent";
import { IServiceContext } from "../IServiceContext";

export type EventProcessEffect<Event extends IEvent = IEvent, ProcessResult = any, Resulting = any> = (
  process: {
    event: Event;
    result: ProcessResult;
  },
  resulting: (event: Event, resulting: Resulting) => Promise<any>,
  context: IServiceContext,
) => Promise<void>;
