import { IServiceDefinition } from "./Service/IServiceDefinition";

export interface IStateStores<AggregateID = any> {
  connect: (service: IServiceDefinition) =>
    Promise<void>;
  queryByAggregateID: <State = any>(scope: string, type: string, aggregateID: AggregateID) =>
    Promise<State>;
  queryCurrentVersion: (scope: string, type: string, aggregateID: AggregateID) =>
    Promise<{ type: string; aggregateID: AggregateID; version: number; }>;
  applyEvent: <State = any, Event = any>(scope: string, type: string, state: State, event: Event) =>
    Promise<State>;
}
