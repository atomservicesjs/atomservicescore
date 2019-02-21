import { CommandTransform } from "./Commands/CommandTransform";
import { CommandValidate } from "./Commands/CommandValidate";

export interface ICommandHandler<CommandPayloads = any, EventPayloads = any> {
  name: string;
  validate: CommandValidate<CommandPayloads>;
  transform: CommandTransform<CommandPayloads, EventPayloads>;
}
