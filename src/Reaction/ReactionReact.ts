import { IEvent } from "../IEvent";
import { IServiceContext } from "../IServiceContext";

export type ReactionReact<Event extends IEvent = IEvent> = (event: Event, context: IServiceContext) => Promise<void>;
