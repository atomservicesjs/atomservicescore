import { IValidationResultType } from "./common/IValidationResultType";
import { IAtomCommand } from "./IAtomCommand";
import { IAtomEvent } from "./IAtomEvent";
import { IServiceIdentifier } from "./IServiceIdentifier";

export interface ICommandHandler<
  Command extends IAtomCommand = IAtomCommand,
  Event extends IAtomEvent = IAtomEvent,
  > {
  name: string;
  validate: (command: Command) => IValidationResultType;
  transform: (command: Command, type: string, identifier: IServiceIdentifier) => Event;
}
