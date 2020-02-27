export interface IState<StateID = any, CreatedBy = any, UpdatedBy = any> {
  _id: StateID;
  _version: number;
  _createdAt: Date;
  _createdBy: CreatedBy;
  _updatedAt: Date;
  _updatedBy: UpdatedBy;
}
