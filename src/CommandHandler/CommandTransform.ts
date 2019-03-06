import { ICommand } from "../ICommand";
import { IEvent } from "../IEvent";
import { IServiceIdentifier } from "../IServiceIdentifier";

export type CommandTransform<
  CommandPayloads = any,
  EventPayloads = any,
  EventID = any,
  AggregateID = any,
  CreatedBy = any,
  > = (command: ICommand<CommandPayloads, CreatedBy>, type: string, identifier: IServiceIdentifier) =>
    IEvent<EventPayloads, EventID, AggregateID, CreatedBy>;
