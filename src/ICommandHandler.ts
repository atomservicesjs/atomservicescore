import { IValidationResultType } from "./common/IValidationResultType";
import { IAtomCommand } from "./IAtomCommand";
import { IAtomEvent } from "./IAtomEvent";
import { ICommand } from "./ICommand";
import { IEvent } from "./IEvent";
import { IServiceIdentifier } from "./Service/IServiceIdentifier";

export interface ICommandHandler<Command extends IAtomCommand = ICommand, Event extends IAtomEvent = IEvent> {
  name: string;
  hook: {
    command?: (command: Command) => Promise<Command>;
    event?: (event: Event) => Promise<Event>;
  };
  validate: (command: Command) => IValidationResultType;
  transform: (command: Command, identifier: IServiceIdentifier) => Event;
}
