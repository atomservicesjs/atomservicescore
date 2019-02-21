import { ICommand } from "./ICommand";
import { IQuery } from "./IQuery";
import { IServiceConfigs } from "./IServiceConfigs";
import { DispatchResultType } from "./Services/DispatchResultType";
import { QueryResultType } from "./Services/QueryResultType";
import { StateQueryStreamListener } from "./StateQueryStreamListener";

export interface IService {
  name: () => string;
  configs: () => IServiceConfigs;
  dispatch: (command: ICommand, listener?: StateQueryStreamListener) => DispatchResultType;
  query: (query: IQuery, listener: StateQueryStreamListener) => QueryResultType;
}
