import { IValidationResultType } from "./common/IValidationResultType";
import { ICommand } from "./ICommand";
import { IEvent } from "./IEvent";

export interface ICommandHandler<
  CommandPayloads = any,
  EventPayloads = any,
  EventID = any,
  AggregateID = any,
  CreatedBy = any,
  > {
  name: string;
  validate: (payloads: CommandPayloads) =>
    IValidationResultType;
  transform: (command: ICommand<CommandPayloads, CreatedBy>, type: string) =>
    IEvent<EventPayloads, EventID, AggregateID, CreatedBy>;
}
