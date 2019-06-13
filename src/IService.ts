import { DispatchResultType } from "./common/DispatchResult";
import { ICommand } from "./ICommand";
import { IServiceConfigs } from "./IServiceConfigs";

export interface IService {
  type: () => string;
  configs: () => IServiceConfigs;
  dispatch: (command: ICommand) => Promise<DispatchResultType>;
}
