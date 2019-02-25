import { StateQueryAction } from "./StateQuery/StateQueryAction";
import { StateQueryStatus } from "./StateQuery/StateQueryStatus";

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
