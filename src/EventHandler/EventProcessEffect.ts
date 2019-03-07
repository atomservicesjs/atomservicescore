import { IAnyState } from "../IAnyState";
import { IEvent } from "../IEvent";
import { IServiceContext } from "../IServiceContext";
import { IStateBase } from "../IStateBase";

export type EventProcessEffect<State extends IStateBase = IAnyState, Event extends IEvent = IEvent> = (
  resources: {
    event: Event;
    state: State;
    initState: State;
  },
  resulting: (event: Event, result: any) => void,
  context?: IServiceContext,
) => Promise<void>;
