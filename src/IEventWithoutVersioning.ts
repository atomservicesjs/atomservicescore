export interface IEventWithoutVersioning<Payloads = any, EventID = any, AggregateID = any, CreatedBy = any> {
  _id: EventID;
  type: string;
  name: string;
  aggregateID: AggregateID;
  payloads: Payloads;
  _createdAt: Date;
  _createdBy: CreatedBy;
  [key: string]: any;
}
