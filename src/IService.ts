import { DispatchResultType } from "./common/DispatchResult";
import { ICommand } from "./ICommand";
import { IServiceContext } from "./Service/IServiceContext";

export interface IService {
  scope: () => string;
  type: () => string;
  dispatch: (command: ICommand, listening?: (data: any) => void) => Promise<DispatchResultType>;
  connect: () => Promise<void>;
  context: () => IServiceContext;
}
