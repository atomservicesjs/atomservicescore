import { IEventDirecting } from "./EventStream/IEventDirecting";
import { IEventPublishing } from "./EventStream/IEventPublishing";
import { IEventSubscribing } from "./EventStream/IEventSubscribing";

export interface IEventStream extends IEventDirecting, IEventPublishing, IEventSubscribing {
}
