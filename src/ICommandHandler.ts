import { IValidationResultType } from "./common/IValidationResultType";
import { IServiceIdentifier } from "./Context/Service/IServiceIdentifier";
import { ICommand } from "./ICommand";
import { IEvent } from "./IEvent";

export interface ICommandHandler<Command extends ICommand = ICommand, Event extends IEvent = IEvent> {
  name: string;
  validate: (command: Command) => IValidationResultType;
  transform: (command: Command, identifier: IServiceIdentifier) => Event;
}
