import { IAnyState } from "../IAnyState";
import { IEvent } from "../IEvent";
import { IStateBase } from "../IStateBase";

export type EventProcess<State extends IStateBase = IAnyState, Event extends IEvent = IEvent> =
  (initState: State, event: Event) => State;
