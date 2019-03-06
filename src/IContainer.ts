import { IContainerConfigs } from "./IContainerConfigs";
import { IService } from "./IService";
import { ServiceBootstrap } from "./Services";

export interface IContainer {
  name: () => string;
  configs: () => IContainerConfigs;
  bootstrap: (bootstraper: ServiceBootstrap) => Promise<void>;
  service: (name: string) => IService | undefined;
  serviceNames: () => string[];
  hash: () => string;
}
