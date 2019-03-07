import { IValidationResultType } from "../common/IValidationResultType";
import { ICommand } from "../ICommand";

export type CommandValidate<Command extends ICommand = ICommand> = (command: Command) => IValidationResultType;
