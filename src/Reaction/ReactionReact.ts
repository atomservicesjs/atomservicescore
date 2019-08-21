import { IStreamMetadata } from "../EventStream";
import { IEvent } from "../IEvent";
import { IServiceContext } from "../Service/IServiceContext";

export type ReactionReact<Event extends IEvent = IEvent> =
  (event: Event, context: IServiceContext, metadata: IStreamMetadata) => Promise<void>;
