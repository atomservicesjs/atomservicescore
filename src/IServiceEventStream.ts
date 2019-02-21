import { IServiceEventPublishing } from "./EventStreams/IServiceEventPublishing";
import { IServiceEventSubscribing } from "./EventStreams/IServiceEventSubscribing";

export interface IServiceEventStream extends IServiceEventPublishing, IServiceEventSubscribing { }
