import { ICommand } from "../ICommand";
import { IEvent } from "../IEvent";
import { IServiceIdentifier } from "../Service/IServiceIdentifier";

export type CommandTransform<Command extends ICommand = ICommand, Event extends IEvent = IEvent> =
  (command: Command, identifier: IServiceIdentifier) => Event;
