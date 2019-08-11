import { IService } from "./IService";

export interface IServiceContainer {
  connect: () => Promise<void>;
  scope: () => string;
  service: (service: IService) => void;
}
