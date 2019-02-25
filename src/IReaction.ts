import { IEvent } from "./IEvent";
import { IServiceContext } from "./IServiceContext";

export interface IReaction<Payloads = any, EventID = any, AggregateID = any, CreatedBy = any> {
  scope: string;
  type: string;
  name: string;
  react: (event: IEvent<Payloads, EventID, AggregateID, CreatedBy>, context: IServiceContext) => Promise<void>;
}
