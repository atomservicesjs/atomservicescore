import { IAtomCommand } from "./IAtomCommand";
import { IAtomQuery } from "./IAtomQuery";
import { IServiceConfigs } from "./IServiceConfigs";
import { DispatchResultType } from "./Services/DispatchResultType";
import { IServiceAsSubscribers } from "./Services/IServiceAsSubscribers";
import { IServiceDescription } from "./Services/IServiceDescription";
import { QueryResultType } from "./Services/QueryResultType";
import { StateQueryResultListener } from "./StateQueryResultListener";

export interface IService {
  name: () => string;
  configs: () => IServiceConfigs;
  description: () => IServiceDescription;
  asSubscribers: () => IServiceAsSubscribers;
  dispatch: (command: IAtomCommand, listener?: StateQueryResultListener) => DispatchResultType;
  query: (query: IAtomQuery, listener: StateQueryResultListener) => QueryResultType;
  hash: (container?: string) => string;
}
