import { IStreamMetadata } from "./Core/EventStream/IStreamMetadata";
import { IEvent } from "./IEvent";
import { IServiceContext } from "./IServiceContext";

export interface IReaction<Event extends IEvent = IEvent> {
  scope: string;
  type: string;
  name: string;
  react: (event: Event, scope: string, context: IServiceContext, metadata: IStreamMetadata) => Promise<void>;
}
