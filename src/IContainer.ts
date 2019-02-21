import { IContainerConfigs } from "./IContainerConfigs";
import { IService } from "./IService";
import { IServiceBootstrapable } from "./Services/IServiceBootstrapable";

export interface IContainer extends IServiceBootstrapable {
  name: () => string;
  configs: () => IContainerConfigs;
  registerService: (service: IService) => void;
}
