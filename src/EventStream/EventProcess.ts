import { IEvent } from "../IEvent";

export type EventProcess = (event: IEvent, processAck: () => Promise<void>) => Promise<void>;
