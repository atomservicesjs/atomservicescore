export interface IStateRepository<State = any> {
  initialState: (scope: string, type: string) => Promise<State>;
  queryByAggregateID: (scope: string, type: string, aggregateID: string) => Promise<State>;
  [key: string]: any;
}
