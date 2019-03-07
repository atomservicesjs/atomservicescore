import { IValidationResultType } from "./common/IValidationResultType";
import { ICommand } from "./ICommand";
import { IEvent } from "./IEvent";
import { IServiceIdentifier } from "./IServiceIdentifier";

export interface ICommandHandler<Command extends ICommand = ICommand, Event extends IEvent = IEvent> {
  name: string;
  validate: (command: Command) => IValidationResultType;
  transform: (command: Command, type: string, identifier: IServiceIdentifier) => Event;
}
