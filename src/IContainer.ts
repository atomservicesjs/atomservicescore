import { IContainerConfigs } from "./IContainerConfigs";
import { IService } from "./IService";

export interface IContainer {
  name: () => string;
  configs: () => IContainerConfigs;
  bootService: (service: IService) => void;
  service: (name: string) => IService | undefined;
  services: () => IService[];
  serviceNames: () => string[];
}
