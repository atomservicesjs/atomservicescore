import { StateQueryResultStatus } from "../StateQueryResultStatus";

export interface ISuccessAsyncQueryResult<RefType = any> {
  status: StateQueryResultStatus;
  ref: RefType;
}

export interface ISuccessSyncQueryResult {
  status: StateQueryResultStatus;
  ref: string;
  state: any;
}

export interface IUnhandledQueryResult {
  status: StateQueryResultStatus;
  name: string;
}

export type QueryResultType =
  ISuccessAsyncQueryResult |
  ISuccessSyncQueryResult |
  IUnhandledQueryResult;
