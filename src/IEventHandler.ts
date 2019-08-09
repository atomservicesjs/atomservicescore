import { IStreamMetadata } from "./Core/EventStream/IStreamMetadata";
import { HandlerProcess } from "./EventHandler/HandlerProcess";
import { HandlerProcessEffect } from "./EventHandler/HandlerProcessEffect";
import { IEvent } from "./IEvent";
import { IServiceContext } from "./IServiceContext";

interface IEventProcessing<Event extends IEvent = IEvent, ProcessResult = any, State = any> {
  process: HandlerProcess<Event, ProcessResult, State>;
}

interface IEventProcessEffecting<Event extends IEvent = IEvent, ProcessResult = any> {
  processEffect: HandlerProcessEffect<Event, ProcessResult>;
}

export interface IEventHandler<Event extends IEvent = IEvent, ProcessResult = any, State = any>
  extends IEventProcessing<Event, ProcessResult, State>, IEventProcessEffecting<Event, ProcessResult> {
  name: string;
  process: (
    event: Event,
    currentState: State,
    metadata: IStreamMetadata,
  ) => Promise<ProcessResult>;
  processEffect: (
    process: {
      event: Event;
      result: ProcessResult;
      metadata: IStreamMetadata;
    },
    resulting: (result: any) => Promise<void>,
    context: IServiceContext,
  ) => Promise<void>;
}
