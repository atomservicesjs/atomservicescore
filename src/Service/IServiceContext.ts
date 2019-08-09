// import { EventProcess, EventReact } from "../Core/EventStream";
import { StreamLevel } from "../Core/EventStream/StreamLevel";
import { IEvent } from "../IEvent";

export interface IServiceContext<AggregateID = any, EventID = any> {
  scope: () => string;
  type: () => string;
  AggregateID: () => AggregateID;
  EventID: () => EventID;
  dispatch: (event: IEvent) => Promise<{ level: StreamLevel; name: string; scope: string; type: string; }>;
  directTo: (ref: string, data: any) => Promise<any>;
  listenTo: (ref: string, listener: (data: any) => any) => Promise<any>;
  // registerEventProcess: (on: { name: string; }, process: EventProcess) => Promise<{ name: string; type: string; scope: string; level: StreamLevel; }>;
  // registerEventReact: (on: { scope: string; type: string; name: string; }, react: EventReact) => Promise<{ name: string; type: string; scope: string; level: StreamLevel; }>;
}
