export interface IServiceStateStoresBridge<AggregateID = any> {
  queryByAggregateID: <State = any>(aggregateID: AggregateID) =>
    Promise<State>;
  queryCurrentVersion: (aggregateID: AggregateID) =>
    Promise<{ type: string; aggregateID: AggregateID; version: number; }>;
  applyEvent: <State = any, Event = any>(state: State, event: Event) =>
    Promise<State>;
}
