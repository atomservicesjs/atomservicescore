import { EventProcess } from "./Events/EventProcess";
import { EventProcessEffect } from "./Events/EventProcessEffect";
import { IStateBase } from "./IStateBase";

export interface IEventHandler<State extends IStateBase = any, Payloads = any> {
  name: string;
  process: EventProcess<State, Payloads>;
  processEffect?: EventProcessEffect<State, Payloads>;
}
