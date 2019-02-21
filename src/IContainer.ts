import { IContainerConfigs } from "./IContainerConfigs";
import { IServiceContext } from "./IServiceContext";

export interface IContainer {
  name: () => string;
  provide: (type: string) => IServiceContext;
  configs: () => IContainerConfigs;
}
