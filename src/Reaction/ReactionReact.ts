import { IEvent } from "../IEvent";
import { IServiceContext } from "../IServiceContext";

export type ReactionReact<Payloads = any, EventID = any, AggregateID = any, CreatedBy = any> =
  (event: IEvent<Payloads, EventID, AggregateID, CreatedBy>, context: IServiceContext) => Promise<void>;
