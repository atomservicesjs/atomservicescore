export interface IEvent<Payloads = any, EventID = any, AggregateID = any, CreatedBy = any> {
  _id: EventID;
  type: string;
  name: string;
  aggregateID: AggregateID;
  payloads: Payloads;
  _createdAt: Date;
  _createdBy: CreatedBy;
  _version: number | undefined;
  [key: string]: any;
}

export interface IEventWithVersioning<Payloads = any, EventID = any, AggregateID = any, CreatedBy = any> {
  _id: EventID;
  type: string;
  name: string;
  aggregateID: AggregateID;
  payloads: Payloads;
  _createdAt: Date;
  _createdBy: CreatedBy;
  _version: number;
  [key: string]: any;
}

export interface IEventWithoutVersioning<Payloads = any, EventID = any, AggregateID = any, CreatedBy = any> {
  _id: EventID;
  type: string;
  name: string;
  aggregateID: AggregateID;
  payloads: Payloads;
  _createdAt: Date;
  _createdBy: CreatedBy;
  _version: undefined;
  [key: string]: any;
}
