import { IEvent } from "../IEvent";
import { IStateQueryResult } from "../IStateQueryResult";

export const StateQueryResult = {
  error: <State = any>(event: IEvent, error: Error, scope: string): IStateQueryResult<State> => ({
    _ref: event._id,
    error,
    origin: {
      action: "process",
      name: event.name,
      scope,
      type: event.type,
    },
    status: "error",
  }),
  process: <State = any>(event: IEvent, state: State, scope: string): IStateQueryResult<State> => ({
    _ref: event._id,
    origin: {
      action: "process",
      name: event.name,
      scope,
      type: event.type,
    },
    state,
    status: "success",
  }),
  unhandled: <State = any>(event: IEvent, scope: string): IStateQueryResult<State> => ({
    _ref: event._id,
    origin: {
      action: "process",
      name: event.name,
      scope,
      type: event.type,
    },
    status: "unhandled",
  }),
};
