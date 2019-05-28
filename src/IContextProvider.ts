import { IServiceConfigs } from "./IServiceConfigs";
import { IServiceContext } from "./IServiceContext";

export interface IContextProvider {
  provide: (type: string, configs: IServiceConfigs) => IServiceContext;
}
