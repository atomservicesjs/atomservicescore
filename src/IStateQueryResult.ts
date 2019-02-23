import { StateQueryAction } from "./StateQueryAction";
import { StateQueryStatus } from "./StateQueryStatus";

export interface IStateQueryResult<StateType = any, ErrorType = Error> {
  _ref: string;
  status: StateQueryStatus;
  origin: {
    action: StateQueryAction;
    name: string;
    type: string;
    scope: string;
  };
  state?: StateType;
  error?: ErrorType;
}
