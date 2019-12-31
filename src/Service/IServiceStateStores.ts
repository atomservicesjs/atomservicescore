export interface IServiceStateStores<AggregateID = any> {
  queryByAggregateID: <State = any>(aggregateID: AggregateID) =>
    Promise<State>;
  queryCurrentVersion: (aggregateID: AggregateID) =>
    Promise<{ scope: string; type: string; aggregateID: AggregateID; version: number; }>;
  applyEvents: (events: Event[]) =>
    Promise<void>;
}
