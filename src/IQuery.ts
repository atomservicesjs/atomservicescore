export interface IQuery<Payloads = any> {
  name: string;
  payloads: Payloads;
}
