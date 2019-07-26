import { ICommand } from "../ICommand";
import { IEvent } from "../IEvent";

export interface ICommandHook<Command extends ICommand = ICommand, Event extends IEvent = IEvent> {
  command?: (command: Command) => Promise<Command>;
  event?: (event: Event) => Promise<Event>;
}
