import { EventLevel } from "../EventStreams/EventLevel";
import { IEventHandler } from "../IEventHandler";
import { IReaction } from "../IReaction";
import { EventProcess } from "./EventProcess";

export interface IServiceEventRegister {
  registerHandler: (handler: IEventHandler, process: EventProcess) =>
    Promise<{
      name: string;
      type: string;
      scope: string;
      level: EventLevel;
    }>;
  registerReaction: (reaction: IReaction, process: EventProcess) =>
    Promise<{
      name: string;
      type: string;
      scope: string;
      level: EventLevel;
    }>;
}
