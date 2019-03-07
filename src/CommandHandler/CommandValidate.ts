import { IValidationResultType } from "../common/IValidationResultType";
import { IAtomCommand } from "../IAtomCommand";

export type CommandValidate<Command extends IAtomCommand = IAtomCommand> = (command: Command) => IValidationResultType;
