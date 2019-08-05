import { IService } from "./IService";

export interface IServiceContainer {
  connect: () => Promise<void>;
  readonly isConnected: boolean;
  registerService: (service: IService) => Promise<IService>;
  scope: () => string;
}
