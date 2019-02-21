import { IEvent } from "../IEvent";
import { IServiceContext } from "../IServiceContext";

export type React<Payloads = any, EventID = any, AggregateID = any, CreatedBy = any> =
  (event: IEvent<Payloads, EventID, AggregateID, CreatedBy>, context: IServiceContext) => void;
