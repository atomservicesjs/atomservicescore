import { IEvent } from "../IEvent";

export type EventReact = (event: IEvent, scope: string, processAck: () => Promise<void>) => Promise<void>;
