import { IAnyState } from "../IAnyState";
import { IAtomEvent } from "../IAtomEvent";
import { IStateBase } from "../IStateBase";

export type EventProcess<
  State extends IStateBase = IAnyState,
  Event extends IAtomEvent = IAtomEvent,
  > = (initState: State, event: Event) => State;
