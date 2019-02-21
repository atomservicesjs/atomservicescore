import { IEvent } from "../IEvent";
import { SubscribeAckFunc } from "./SubscribeAckFunc";

export type ServiceEventSubscribing = (
  name: string,
  process: (event: IEvent, ack: SubscribeAckFunc) => void,
) => void;
