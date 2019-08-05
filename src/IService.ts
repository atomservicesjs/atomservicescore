import { DispatchResultType } from "./common/DispatchResult";
import { IServiceConfigs } from "./Configs/IServiceConfigs";
import { ICommand } from "./ICommand";

export interface IService {
  scope: () => string;
  type: () => string;
  configs: () => IServiceConfigs;
  dispatch: (command: ICommand, listening?: (data: any) => void) => Promise<DispatchResultType>;
  connect: () => Promise<void>;
}
