import {
  EventLevel,
  EventProcess,
} from "./EventStreams";
import { IEvent } from "./IEvent";
import { IEventHandler } from "./IEventHandler";
import { IReaction } from "./IReaction";

export interface IServiceEventStream {
  directTo: (ref: string, data: any) => Promise<void>;
  listenTo: (ref: string, listener: (data: any) => void) => Promise<void>;
  dispatch: (event: IEvent) => Promise<void>;
  registerHandler: (handler: IEventHandler, process: EventProcess) => Promise<{ name: string; type: string; scope: string; level: EventLevel; }>;
  registerReaction: (reaction: IReaction, process: EventProcess) => Promise<{ name: string; type: string; scope: string; level: EventLevel; }>;
}
