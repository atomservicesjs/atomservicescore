import { IAnyState } from "./IAnyState";
import { IEvent } from "./IEvent";
import { IServiceContext } from "./IServiceContext";
import { IStateBase } from "./IStateBase";

export interface IEventHandler<
  State extends IStateBase = IAnyState,
  Payloads = any,
  EventID = any,
  AggregateID = any,
  CreatedBy = any,
  > {
  name: string;
  process: (initState: State, event: IEvent<Payloads, EventID, AggregateID, CreatedBy>) => State;
  processEffect: (
    resources: {
      event: IEvent<Payloads, EventID, AggregateID, CreatedBy>;
      state: State;
      initState: State;
    },
    resulting: (event: IEvent, result: any) => void,
    context?: IServiceContext,
  ) => Promise<void>;
}
