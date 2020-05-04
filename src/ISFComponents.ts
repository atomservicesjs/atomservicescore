import { ICommand } from "./ICommand";
import { ICommandHandler } from "./ICommandHandler";
import { IEvent } from "./IEvent";
import { IEventHandler } from "./IEventHandler";

export interface ISFComponents<Event extends IEvent = IEvent, Command extends ICommand = ICommand<Event["payloads"], Event["_createdBy"]>, ProcessResult = any> {
  Commander: (props: {
    [prop in keyof Event["payloads"]]: Event["payloads"][prop];
  } & {
    aggregateID?: Event["aggregateID"];
    _createdBy?: Event["_createdBy"];
    _version?: Event["_version"];
    [key: string]: any;
  }) => Command;
  CommandHandler: ICommandHandler<Command, Event>;
  EventHandler: IEventHandler<Event, ProcessResult>;
};
