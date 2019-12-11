export interface IStateStoresBridge<AggregateID = any> {
  queryByAggregateID: <State = any>(scope: string, type: string, aggregateID: AggregateID) =>
    Promise<State>;
  queryCurrentVersion: (scope: string, type: string, aggregateID: AggregateID) =>
    Promise<{ type: string; aggregateID: AggregateID; version: number; }>;
  applyEvent: <State = any, Event = any>(scope: string, type: string, state: State, event: Event) =>
    Promise<State>;
}
