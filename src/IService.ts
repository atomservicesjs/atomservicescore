import { DispatchResultType } from "./common/DispatchResult";
import { ICommand } from "./ICommand";

export interface IService {
  scope: () => string;
  type: () => string;
  dispatch: (command: ICommand, listening?: (data: any) => void) => Promise<DispatchResultType>;
  connect: () => Promise<void>;
}
