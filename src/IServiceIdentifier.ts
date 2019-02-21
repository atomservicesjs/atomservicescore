export interface IServiceIdentifier<AggregateID = any, EventID = any> {
  newAggregateID: () => AggregateID;
  newEventID: () => EventID;
}
