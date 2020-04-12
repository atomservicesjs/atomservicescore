export interface ICommand<Payloads = any, CreatedBy = any> {
  name: string;
  payloads: Payloads;
  _createdBy: CreatedBy;
  _version?: number;
}
