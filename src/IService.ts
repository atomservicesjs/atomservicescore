import { DispatchResultType } from "./common/DispatchResult";
import { ICommand } from "./ICommand";
import { IServiceConfigs } from "./IServiceConfigs";

export interface IService {
  scope: () => string;
  type: () => string;
  configs: () => IServiceConfigs;
  dispatch: (command: ICommand) => Promise<DispatchResultType>;
  connect: () => Promise<any>;
}
