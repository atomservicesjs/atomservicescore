import { IAtomCommand } from "./IAtomCommand";
import { IAtomQuery } from "./IAtomQuery";
import { IContainerConfigs } from "./IContainerConfigs";
import { IService } from "./IService";
import { ServiceBootstrap } from "./Services";
import { DispatchResultType } from "./Services/DispatchResultType";
import { QueryResultType } from "./Services/QueryResultType";
import { StateQueryResultListener } from "./StateQueryResultListener";

export interface IContainer {
  name: () => string;
  configs: () => IContainerConfigs;
  bootstrap: (bootstraper: ServiceBootstrap) => Promise<void>;
  dispatch: (type: string, command: IAtomCommand, listener?: StateQueryResultListener) => DispatchResultType;
  query: (type: string, query: IAtomQuery, listener: StateQueryResultListener) => QueryResultType;
  service: (type: string) => IService | undefined;
  serviceNames: () => string[];
  hash: () => string;
}
