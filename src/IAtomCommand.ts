export interface IAtomCommand<Payloads = any, CreatedBy = any> {
  name: string;
  payloads: Payloads;
  _version: number;
  _createdBy: CreatedBy;
}
