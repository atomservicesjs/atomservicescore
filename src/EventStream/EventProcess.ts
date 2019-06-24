import { IEvent } from "../IEvent";

export type EventProcess = (event: IEvent, processAck: () => void) => Promise<void>;
