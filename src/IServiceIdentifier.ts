export interface IServiceIdentifier<AggregateID = any, EventID = any, QueryID = any> {
  newAggregateID: () => AggregateID;
  newEventID: () => EventID;
  newQueryID: () => QueryID;
}
