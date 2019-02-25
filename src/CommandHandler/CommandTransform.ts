import { ICommand } from "../ICommand";
import { IEvent } from "../IEvent";

export type CommandTransform<
  CommandPayloads = any,
  EventPayloads = any,
  EventID = any,
  AggregateID = any,
  CreatedBy = any,
  > = (command: ICommand<CommandPayloads, CreatedBy>, type: string) =>
    IEvent<EventPayloads, EventID, AggregateID, CreatedBy>;
