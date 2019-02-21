import { IEvent } from "../IEvent";
import { SubscribeAckFunc } from "./SubscribeAckFunc";

export type ServiceReactionSubscribing = (
  on: { name: string; type: string; scope: string; },
  reactor: (event: IEvent, ack: SubscribeAckFunc) => void,
) => void;
