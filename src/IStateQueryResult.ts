import { StateQueryAction } from "./StateQueryAction";
import { StateQueryStatus } from "./StateQueryStatus";

export interface IStateQueryResult<Result = any, ERROR = Error> {
  _ref: string;
  status: StateQueryStatus;
  origin: {
    action: StateQueryAction;
    name: string;
    type: string;
    scope: string;
  };
  result?: Result;
  error?: ERROR;
}
