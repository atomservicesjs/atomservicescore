export interface IStateRepository<State = any> {
  initialState: (type: string) => Promise<State>;
  queryByAggregateID: (type: string, aggregateID: string) => Promise<State>;
}
