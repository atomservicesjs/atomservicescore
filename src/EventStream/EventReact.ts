import { IEvent } from "../IEvent";
import { IStreamMetadata } from "./IStreamMetadata";

export type EventReact<Event extends IEvent = IEvent> = (
  event: Event,
  metadata: IStreamMetadata,
  processAck: () => Promise<void>,
) => Promise<void>;
