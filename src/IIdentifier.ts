export interface IIdentifier<AggregateID = any, EventID = any> {
  AggregateID: (type: string) => AggregateID;
  EventID: (type: string) => EventID;
}
