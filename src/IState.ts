export interface IState<StateID = any> {
  _id: StateID;
  _version: number;
  [key: string]: any;
}
