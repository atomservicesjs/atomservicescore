export interface IServiceStateRepository<State = any, AggregateID = string> {
  type: () => string;
  initialState: () => Promise<State>;
  queryByAggregateID: (aggregateID: AggregateID) => Promise<State>;
}
