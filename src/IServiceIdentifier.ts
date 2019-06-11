export interface IServiceIdentifier<AggregateID = any, EventID = any> {
  type: () => string;
  AggregateID: () => AggregateID;
  EventID: () => EventID;
}
