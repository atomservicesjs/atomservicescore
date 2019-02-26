import { IEvent } from "../IEvent";

export const createLocalAck = (event: IEvent, ackListener?: (event: IEvent) => void) => () => {
  if (ackListener) {
    ackListener(event);
  }
};

Object.freeze(createLocalAck);
