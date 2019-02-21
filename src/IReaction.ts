import { React } from "./Reactions/React";

export interface IReaction<Payloads = any, EventID = any, AggregateID = any, CreatedBy = any> {
  scope: string;
  type: string;
  name: string;
  react: React<Payloads, EventID, AggregateID, CreatedBy>;
}
