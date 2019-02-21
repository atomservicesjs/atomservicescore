import { IServiceConfigs } from "../IServiceConfigs";
import { IServiceContext } from "../IServiceContext";

export interface IServiceBootstrapable {
  provide: (type: string, configs?: IServiceConfigs) => IServiceContext;
}
