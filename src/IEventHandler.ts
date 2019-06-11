import { EventProcess } from "./EventHandler/EventProcess";
import { EventProcessEffect } from "./EventHandler/EventProcessEffect";
import { IEvent } from "./IEvent";
import { IServiceContext } from "./IServiceContext";

interface IEventProcessing<Event extends IEvent = IEvent, ProcessResult = any, State = any> {
  process: EventProcess<Event, ProcessResult, State>;
}

interface IEventProcessEffecting<Event extends IEvent = IEvent, ProcessResult = any, Resulting = any> {
  processEffect: EventProcessEffect<Event, ProcessResult, Resulting>;
}

export interface IEventHandler<Event extends IEvent = IEvent, ProcessResult = any, State = any, Resulting = any>
  extends IEventProcessing<Event, ProcessResult, State>, IEventProcessEffecting<Event, ProcessResult, Resulting> {
  name: string;
  process: (event: Event, currentState: State) => Promise<ProcessResult>;
  processEffect: (
    process: {
      event: Event;
      result: ProcessResult;
    },
    resulting: (event: Event, resulting: Resulting) => Promise<any>,
    context: IServiceContext,
  ) => Promise<void>;
}
