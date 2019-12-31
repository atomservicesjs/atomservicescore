import { IServiceDefinition } from "./Service/IServiceDefinition";

export interface IStateStores<AggregateID = any> {
  connect: (service: IServiceDefinition) =>
    Promise<void>;
  queryByAggregateID: <State = any>(scope: string, type: string, aggregateID: AggregateID) =>
    Promise<State>;
  queryCurrentVersion: (scope: string, type: string, aggregateID: AggregateID) =>
    Promise<{ scope: string; type: string; aggregateID: AggregateID; version: number; }>;
  applyEvents: (scope: string, type: string, events: Event[]) =>
    Promise<void>;
}
