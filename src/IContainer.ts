import { ICommand } from "./ICommand";
import { IContainerConfigs } from "./IContainerConfigs";
import { IQuery } from "./IQuery";
import { IService } from "./IService";
import { ServiceBootstrap } from "./Services";
import { DispatchResultType } from "./Services/DispatchResultType";
import { QueryResultType } from "./Services/QueryResultType";
import { StateQueryResultListener } from "./StateQueryResultListener";

export interface IContainer {
  name: () => string;
  configs: () => IContainerConfigs;
  bootstrap: (bootstraper: ServiceBootstrap) => Promise<void>;
  dispatch: (type: string, command: ICommand, listener?: StateQueryResultListener) => DispatchResultType;
  query: (type: string, query: IQuery, listener: StateQueryResultListener) => QueryResultType;
  service: (type: string) => IService | undefined;
  serviceNames: () => string[];
  hash: () => string;
}
