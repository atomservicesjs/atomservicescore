import { IEvent } from "../IEvent";
import { IStreamMetadata } from "./IStreamMetadata";
import { IStreamPublishOn } from "./IStreamPublishOn";

export interface IEventPublishing {
  connect: () => Promise<void>;
  publish: (
    on: IStreamPublishOn,
    metadata: IStreamMetadata,
    event: IEvent,
  ) => Promise<void>;
}
