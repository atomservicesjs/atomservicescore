import { IDirectEventStream } from "./EventStreams/IDirectEventStream";
import { IEventPublishing } from "./EventStreams/IEventPublishing";
import { IEventSubscribing } from "./EventStreams/IEventSubscribing";

export interface IEventStream extends IDirectEventStream, IEventPublishing, IEventSubscribing { }
