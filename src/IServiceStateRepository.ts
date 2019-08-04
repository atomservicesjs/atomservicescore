export interface IServiceStateRepository<State = any, AggregateID = string> {
  scope: () => string;
  type: () => string;
  initialState: () => Promise<State>;
  queryByAggregateID: (aggregateID: AggregateID) => Promise<State>;
}
