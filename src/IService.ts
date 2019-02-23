import { ICommand } from "./ICommand";
import { IQuery } from "./IQuery";
import { IServiceConfigs } from "./IServiceConfigs";
import { DispatchResultType } from "./Services/DispatchResultType";
import { QueryResultType } from "./Services/QueryResultType";
import { StateQueryResultListener } from "./StateQueryResultListener";

export interface IService {
  name: () => string;
  configs: () => IServiceConfigs;
  dispatch: (command: ICommand, listener?: StateQueryResultListener) => DispatchResultType;
  query: (query: IQuery, listener: StateQueryResultListener) => QueryResultType;
}
