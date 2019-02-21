export interface IIdentifier<AggregateID = any, EventID = any, QueryID = any> {
  AggregateID: (type: string) => AggregateID;
  EventID: (type: string) => EventID;
  QueryID: (type: string) => QueryID;
}
