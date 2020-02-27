export interface IAtomEvent<AggregateID = any> {
  type: string;
  name: string;
  aggregateID: AggregateID;
}
