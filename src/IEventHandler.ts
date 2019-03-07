import { IAnyState } from "./IAnyState";
import { IEvent } from "./IEvent";
import { IServiceContext } from "./IServiceContext";
import { IStateBase } from "./IStateBase";

export interface IEventHandler<State extends IStateBase = IAnyState, Event extends IEvent = IEvent> {
  name: string;
  process: (initState: State, event: Event) => State;
  processEffect: (
    resources: {
      event: Event;
      state: State;
      initState: State;
    },
    resulting: (event: Event, result: any) => void,
    context?: IServiceContext,
  ) => Promise<void>;
}
