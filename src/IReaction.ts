import { IEvent } from "./IEvent";
import { IServiceContext } from "./IServiceContext";

export interface IReaction<Event extends IEvent = IEvent> {
  scope: string;
  type: string;
  name: string;
  react: (event: Event, context: IServiceContext) => Promise<void>;
}
