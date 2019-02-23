import { IEventHandler } from "../IEventHandler";
import { IReaction } from "../IReaction";
import { EventProcess } from "./EventProcess";

export interface IServiceEventRegister {
  registerHandler: (handler: IEventHandler, process: EventProcess) => void;
  registerReaction: (reaction: IReaction, process: EventProcess) => void;
}
