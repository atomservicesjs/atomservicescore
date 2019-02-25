import { IEvent } from "../IEvent";
import { IStateBase } from "../IStateBase";

export type EventProcess<
  State extends IStateBase,
  Payloads = any,
  EventID = any,
  AggregateID = any,
  CreatedBy = any,
  > = (initState: State, event: IEvent<Payloads, EventID, AggregateID, CreatedBy>) => State;
