import { IEvent } from "../IEvent";
import { EventProcessAck } from "./EventProcessAck";

export type EventProcess = (event: IEvent, ack: EventProcessAck) => void;
