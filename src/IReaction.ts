import { Reaction } from "./Reactions/Reaction";

export interface IReaction<Payloads = any, EventID = any, AggregateID = any, CreatedBy = any> {
  scope: string;
  type: string;
  name: string;
  react: Reaction<Payloads, EventID, AggregateID, CreatedBy>;
}
