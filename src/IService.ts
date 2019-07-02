import { DispatchListening } from "./common/DispatchListening";
import { DispatchResultType } from "./common/DispatchResult";
import { IServiceConfigs } from "./Configs/IServiceConfigs";
import { ICommand } from "./ICommand";

export interface IService {
  scope: () => string;
  type: () => string;
  configs: () => IServiceConfigs;
  dispatch: (command: ICommand, listening?: DispatchListening) => Promise<DispatchResultType>;
  connect: () => Promise<void>;
}
