import { IEvent } from "../IEvent";
import { IStreamMetadata } from "./IStreamMetadata";

export type StreamProcessing = (event: IEvent, metadata: IStreamMetadata, processAck: () => Promise<void>) => Promise<void>;
