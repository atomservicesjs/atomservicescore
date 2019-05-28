import { IEvent } from "../IEvent";
import { EventProcessAck } from "./EventProcessAck";

export type EventProcess = (event: IEvent, processAck: EventProcessAck) => Promise<void>;
