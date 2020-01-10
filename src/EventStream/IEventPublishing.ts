import { IEvent } from "../IEvent";
import { IStreamMetadata } from "./IStreamMetadata";
import { IStreamPublishOn } from "./IStreamPublishOn";

export interface IEventPublishing {
  connect: () => Promise<void>;
  publish: (props: {
    event: IEvent;
    metadata: IStreamMetadata;
    on: IStreamPublishOn;
  }) => Promise<void>;
}
