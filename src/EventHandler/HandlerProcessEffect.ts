import { IEvent } from "../IEvent";
import { IServiceContext } from "../IServiceContext";

export type HandlerProcessEffect<Event extends IEvent = IEvent, ProcessResult = any> = (
  process: {
    event: Event;
    result: ProcessResult;
  },
  resulting: (result: any) => Promise<void>,
  context: IServiceContext,
) => Promise<void>;
