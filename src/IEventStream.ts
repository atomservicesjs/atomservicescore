import { IEventPublishing } from "./EventStreams/IEventPublishing";
import { IEventSubscribing } from "./EventStreams/IEventSubscribing";
import { IStateQueryStream } from "./IStateQueryStream";

export interface IEventStream extends IEventPublishing, IEventSubscribing, IStateQueryStream { }
