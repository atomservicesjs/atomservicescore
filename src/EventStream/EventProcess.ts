import { IEvent } from "../IEvent";
import { IStreamMetadata } from "./IStreamMetadata";

export type EventProcess = (
  event: IEvent,
  processAck: () => Promise<void>,
  metadata: IStreamMetadata,
) => Promise<void>;
