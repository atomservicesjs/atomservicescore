import { EventProcess } from "./EventStream/EventProcess";
import { EventReact } from "./EventStream/EventReact";
import { StreamLevel } from "./EventStream/StreamLevel";
import { IEvent } from "./IEvent";
import { IEventHandler } from "./IEventHandler";
import { IReaction } from "./IReaction";

export interface IServiceEventStream {
  scope: () => string;
  type: () => string;
  dispatch: (event: IEvent, isReplay?: boolean) => Promise<{ name: string; type: string; scope: string; level: StreamLevel; }>;
  registerHandler: (handler: IEventHandler, process: EventProcess) => Promise<{ name: string; type: string; scope: string; level: StreamLevel; }>;
  registerReaction: (reaction: IReaction, process: EventReact) => Promise<{ name: string; type: string; scope: string; level: StreamLevel; }>;
}
