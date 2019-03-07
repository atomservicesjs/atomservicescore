export interface IStateBase<StateID = any> {
  _createdAt: Date;
  _id: StateID;
  _updatedAt: Date;
  _version: number;
  [key: string]: any;
}
