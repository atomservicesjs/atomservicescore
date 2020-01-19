import { IDispatchResult } from "./common/DispatchResult";
import { ICommand } from "./ICommand";
import { IServiceContext } from "./Service/IServiceContext";

export interface IManagedService {
  scope: () => string;
  type: () => string;
  dispatch: (command: ICommand, listening?: (data: any) => void) => Promise<IDispatchResult>;
  connect: () => Promise<void>;
  context: (
    options?: {
      isReplay?: boolean;
    },
  ) => IServiceContext;
}
