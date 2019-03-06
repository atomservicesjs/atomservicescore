import { IServiceConfigs } from "./IServiceConfigs";
import { IServiceContext } from "./IServiceContext";

export interface IContextProvider<AggregateID = any, EventID = any, CreatedBy = any>  {
  provide: (type: string, configs: IServiceConfigs) => IServiceContext<AggregateID, EventID, CreatedBy>;
}
