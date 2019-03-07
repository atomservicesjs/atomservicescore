import { IAnyState } from "../IAnyState";
import { IAtomEvent } from "../IAtomEvent";
import { IServiceContext } from "../IServiceContext";
import { IStateBase } from "../IStateBase";

export type EventProcessEffect<
  State extends IStateBase = IAnyState,
  Event extends IAtomEvent = IAtomEvent,
  > = (
    resources: {
      event: Event;
      state: State;
      initState: State;
    },
    resulting: (event: Event, result: any) => void,
    context?: IServiceContext,
  ) => Promise<void>;
