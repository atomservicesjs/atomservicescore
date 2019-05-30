import { IAnyState } from "./IAnyState";
import { IEvent } from "./IEvent";
import { IServiceContext } from "./IServiceContext";
import { IStateBase } from "./IStateBase";

export interface IEventHandler<State extends IStateBase = IAnyState, Event extends IEvent = IEvent> {
  name: string;
  process: (event: Event) => Promise<State>;
  processEffect: (
    resources: {
      event: Event;
      state: State;
    },
    resulting: (event: Event, result: any) => Promise<any>,
    context?: IServiceContext,
  ) => Promise<void>;
}
