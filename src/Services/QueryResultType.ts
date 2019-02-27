export type QueryStatus = "accepted" | "invalid" | "unhandled";

export interface IAcceptQueryResult {
  accept: boolean;
  status: QueryStatus;
  ref: string;
}

export interface IInvalidQueryResult {
  accept: boolean;
  status: QueryStatus;
  invalidAttributes: any;
}

export interface IUnhandledQueryResult {
  accept: boolean;
  status: QueryStatus;
  type: string;
  name: string;
}

export type QueryResultType =
  IAcceptQueryResult |
  IInvalidQueryResult |
  IUnhandledQueryResult;
