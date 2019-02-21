import { IEvent } from "../IEvent";
import { EventLevel } from "./EventLevel";
import { SubscribeAckFunc } from "./SubscribeAckFunc";

export type EventSubscribing = (
  on: { name: string; type: string; scope: string; level: EventLevel; },
  to: { type: string; scope: string; },
  process: (event: IEvent, ack: SubscribeAckFunc) => void,
) => void;
