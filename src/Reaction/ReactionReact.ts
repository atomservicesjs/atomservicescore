import { IStreamMetadata } from "../Core/EventStream";
import { IEvent } from "../IEvent";
import { IServiceContext } from "../Service/IServiceContext";

export type ReactionReact<Event extends IEvent = IEvent> = (event: Event, scope: string, context: IServiceContext, metadata: IStreamMetadata) => Promise<void>;
