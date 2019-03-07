import { ICommand } from "./ICommand";
import { IQuery } from "./IQuery";
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
  dispatch: (command: ICommand, listener?: StateQueryResultListener) => DispatchResultType;
  query: (query: IQuery, listener: StateQueryResultListener) => QueryResultType;
  hash: (container?: string) => string;
}
