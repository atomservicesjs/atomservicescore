import { ICommand } from "../ICommand";
import { IEvent } from "../IEvent";

export type CommandTransform<CommandPayloads, EventPayloads, EventID = any, AggregateID = any, CreatedBy = any> =
  (command: ICommand<CommandPayloads, CreatedBy>, type: string) =>
    IEvent<EventPayloads, EventID, AggregateID, CreatedBy>;
