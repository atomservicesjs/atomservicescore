import { IEventPublishing } from "./EventStream/IEventPublishing";
import { IEventSubscribing } from "./EventStream/IEventSubscribing";

export interface IEventStream extends IEventPublishing, IEventSubscribing {
}
