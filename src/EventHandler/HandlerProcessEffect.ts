import { IEvent } from "../IEvent";
import { IServiceContext } from "../IServiceContext";

export type HandlerProcessEffect<Event extends IEvent = IEvent, ProcessResult = any, Resulting = any> = (
  process: {
    event: Event;
    result: ProcessResult;
  },
  resulting: (event: Event, resulting: Resulting) => Promise<any>,
  context: IServiceContext,
) => Promise<void>;
