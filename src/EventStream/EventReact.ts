import { IEvent } from "../IEvent";
import { IStreamMetadata } from "./IStreamMetadata";

export type EventReact = (
  event: IEvent,
  scope: string,
  processAck: () => Promise<void>,
  metadata: IStreamMetadata,
) => Promise<void>;
