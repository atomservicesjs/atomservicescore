import { ICommand } from "./ICommand";
import { ICommandHandler } from "./ICommandHandler";
import { IEvent } from "./IEvent";
import { IEventHandler } from "./IEventHandler";
import { IStateHandler } from "./IStateHandler";

export interface ISFComponents<Event extends IEvent = IEvent, Command extends ICommand = ICommand<Event["payloads"], Event["_createdBy"]>, ProcessResult = any> {
  Commander: (props: {
    [prop in keyof Command["payloads"]]: Command["payloads"][prop];
  } & {
    aggregateID?: Event["aggregateID"];
    _createdBy?: Command["_createdBy"];
    _version?: Command["_version"];
    [key: string]: any;
  }) => Command;
  CommandHandler: ICommandHandler<Command, Event>;
  EventHandler: IEventHandler<Event, ProcessResult>;
  StateHandler: IStateHandler<Event>;
};
