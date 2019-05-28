import { IEventDirecting } from "./EventStreams/IEventDirecting";
import { IEventPublishing } from "./EventStreams/IEventPublishing";
import { IEventSubscribing } from "./EventStreams/IEventSubscribing";

export interface IEventStream extends IEventDirecting, IEventPublishing, IEventSubscribing { }
