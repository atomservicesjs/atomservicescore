import { IValidationResultType } from "./common/IValidationResultType";
import { ICommand } from "./ICommand";
import { IEvent } from "./IEvent";
import { IServiceIdentifier } from "./IServiceIdentifier";

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
  transform: (command: ICommand<CommandPayloads, CreatedBy>, type: string, identifier?: IServiceIdentifier) =>
    IEvent<EventPayloads, EventID, AggregateID, CreatedBy>;
}
