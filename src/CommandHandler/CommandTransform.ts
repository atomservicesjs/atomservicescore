import { ICommand } from "../ICommand";
import { IEvent } from "../IEvent";
import { IServiceContext } from "../IServiceContext";

export type CommandTransform<Command extends ICommand = ICommand, Event extends IEvent = IEvent> =
  (command: Command, context: IServiceContext) => Event;
