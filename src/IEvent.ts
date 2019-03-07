import { IAtomEvent } from "./IAtomEvent";

export interface IEvent<Payloads = any, EventID = any, AggregateID = any, CreatedBy = any>
  extends IAtomEvent<EventID, AggregateID> {
  _id: EventID;
  type: string;
  name: string;
  aggregateID: AggregateID;
  payloads: Payloads;
  _version: number;
  _createdAt: Date;
  _createdBy: CreatedBy;
}
