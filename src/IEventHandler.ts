import { IEvent } from "./IEvent";
import { IServiceContext } from "./IServiceContext";

export interface IEventHandler<Event extends IEvent = IEvent, ProcessResult = any> {
  name: string;
  process: (event: Event) => Promise<ProcessResult>;
  processEffect: (
    process: {
      event: Event;
      result: ProcessResult;
    },
    resulting: (event: Event, resulting: any) => Promise<any>,
    context?: IServiceContext,
  ) => Promise<void>;
}
