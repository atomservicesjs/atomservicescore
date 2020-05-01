export interface IAtomCommand<Payloads = any> {
  name: string;
  payloads: Payloads;
}
