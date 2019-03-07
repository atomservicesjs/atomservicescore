import { IAtomCommand } from "./IAtomCommand";

export interface ICommand<Payloads = any, CreatedBy = any> extends IAtomCommand {
  name: string;
  payloads: Payloads;
  _version: number;
  _createdBy: CreatedBy;
}
