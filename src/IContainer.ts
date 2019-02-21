import { IContainerConfigs } from "./IContainerConfigs";
import { IServiceBootstrapable } from "./Services/IServiceBootstrapable";

export interface IContainer extends IServiceBootstrapable {
  name: () => string;
  configs: () => IContainerConfigs;
}
