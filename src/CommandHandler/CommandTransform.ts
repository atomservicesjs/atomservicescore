import { IServiceIdentifier } from "../Context/Service/IServiceIdentifier";
import { ICommand } from "../ICommand";
import { IEvent } from "../IEvent";

export type CommandTransform<Command extends ICommand = ICommand, Event extends IEvent = IEvent> =
  (command: Command, identifier: IServiceIdentifier) => Event;
