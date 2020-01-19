import { IAcceptDispatchRef } from "./IAcceptDispatchRef";

export type DispatchStatus = "accepted" | "error" | "invalid" | "unhandled";

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
  error: any;
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

export interface IDispatchResult<Ref extends IAcceptDispatchRef = IAcceptDispatchRef> {
  accept: boolean;
  status: "accepted" | "error" | "invalid" | "unhandled";
  ref?: Ref;
  type?: string;
  name?: string;
  error?: any;
  invalidAttributes?: any;
}

export type DispatchResultType =
  IAcceptDispatchResult |
  IErrorDispatchResult |
  IInvalidDispatchResult |
  IUnhandledDispatchResult;
