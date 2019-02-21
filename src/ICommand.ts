export interface ICommand<Payloads = any, CreatedBy = any> {
  name: string;
  payloads: Payloads;
  _version: number;
  _createdAt: Date;
  _createdBy: CreatedBy;
}
