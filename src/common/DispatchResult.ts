export type DispatchStatus = "accepted" | "invalid" | "unhandled";

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
  status: DispatchStatus;
  ref: Ref;
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
