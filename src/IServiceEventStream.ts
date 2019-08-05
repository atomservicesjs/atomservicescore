import { EventProcess } from "./EventStream/EventProcess";
import { EventReact } from "./EventStream/EventReact";
import { StreamLevel } from "./EventStream/StreamLevel";
import { IEvent } from "./IEvent";

export interface IServiceEventStream {
  scope: () => string;
  type: () => string;
  dispatch: (
    event: IEvent,
    metadata?: {
      isReplay: boolean;
    }) => Promise<{ name: string; type: string; scope: string; level: StreamLevel; }>;
  directTo: (ref: string, data: any) => Promise<any>;
  listenTo: (ref: string, listener: (data: any) => void) => Promise<any>;
  registerEventProcess: (on: { name: string; }, process: EventProcess) => Promise<{ name: string; type: string; scope: string; level: StreamLevel; }>;
  registerEventReact: (on: { scope: string; type: string; name: string; }, react: EventReact) => Promise<{ name: string; type: string; scope: string; level: StreamLevel; }>;
}
