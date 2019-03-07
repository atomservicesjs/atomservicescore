import { ICommand } from "../ICommand";
import { IEvent } from "../IEvent";
import { IServiceIdentifier } from "../IServiceIdentifier";

export type CommandTransform<Command extends ICommand = ICommand, Event extends IEvent = IEvent> =
  (command: Command, type: string, identifier: IServiceIdentifier) => Event;
