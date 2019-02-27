export type DispatchStatus = "accepted" | "invalid" | "unhandled";

export interface IAcceptDispatchResult {
  accept: boolean;
  status: DispatchStatus;
  ref: string;
}

export interface IInvalidDispatchResult {
  accept: boolean;
  status: DispatchStatus;
  invalidAttributes: any;
}

export interface IUnhandledDispatchResult {
  accept: boolean;
  status: DispatchStatus;
  type: string;
  name: string;
}

export type DispatchResultType =
  IAcceptDispatchResult |
  IInvalidDispatchResult |
  IUnhandledDispatchResult;
