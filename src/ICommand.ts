export interface ICommand<CreatedBy = any> {
  name: string;
  _version?: number;
  _createdBy: CreatedBy;
}
