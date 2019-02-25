export interface IStateBase<StateID = any, CreatedBy = any, UpdatedBy = any> {
  _createdAt: Date;
  _createdBy: CreatedBy;
  _id: StateID;
  _updatedAt: Date;
  _updatedBy: UpdatedBy;
  _version: number;
}
