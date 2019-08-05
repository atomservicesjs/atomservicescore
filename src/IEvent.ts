export interface IEvent<EventID = any, AggregateID = any> {
  _id: EventID;
  type: string;
  name: string;
  aggregateID: AggregateID;
  _version: number;
  _createdAt: Date;
}
