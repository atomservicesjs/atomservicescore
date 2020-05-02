export interface IAtomEvent<Payloads = any, EventID = any, AggregateID = any> {
  _id: EventID;
  type: string;
  name: string;
  aggregateID: AggregateID;
  payloads: Payloads;
  _createdAt: Date;
  [key: string]: any;
}
