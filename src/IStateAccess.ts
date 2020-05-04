import { IStateAccessCursor } from "./IStateAccessCursor";

export interface IStateAccess<Aggregate = any, AggregateID = any> {
  count: () =>
    Promise<number>;
  fetchAggregates: () =>
    Promise<IStateAccessCursor<Aggregate>>;
  queryByAggregateID: (aggregateID: AggregateID) =>
    Promise<Aggregate> | Promise<undefined>;
  queryCurrentVersion: (aggregateID: AggregateID) =>
    Promise<{ aggregateID: AggregateID; version: number; }>;
  [key: string]: any;
}
