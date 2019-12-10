export type DispatchStatus = "accepted" | "error" | "invalid" | "unhandled";

export interface IAcceptDispatchRef {
  _id: any;
  type: string;
  name: string;
  aggregateID: any;
  _version: number;
  _createdAt: Date;
}

export interface IAcceptDispatchResult<Ref extends IAcceptDispatchRef = IAcceptDispatchRef> {
  accept: boolean;
  status: "accepted";
  ref: Ref;
}

export interface IErrorDispatchResult {
  accept: boolean;
  status: "error";
  type: string;
  name: string;
}

export interface IInvalidDispatchResult {
  accept: boolean;
  status: "invalid";
  invalidAttributes: any;
}

export interface IUnhandledDispatchResult {
  accept: boolean;
  status: "unhandled";
  type: string;
  name: string;
}

export type DispatchResultType =
  IAcceptDispatchResult |
  IErrorDispatchResult |
  IInvalidDispatchResult |
  IUnhandledDispatchResult;
