import { IStateAccess } from "./IStateAccess";

export interface IStateAccessConnect<Aggregate = any, AggregateID = any> {
  connect: (scope: string, type: string) => Promise<IStateAccess<Aggregate, AggregateID>>;
}
