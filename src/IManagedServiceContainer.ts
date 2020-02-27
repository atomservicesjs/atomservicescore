import { IDispatchResult } from "./common/DispatchResult";
import { ICommand } from "./ICommand";
import { IManagedService } from "./IManagedService";

export interface IManagedServiceContainer {
  connect: () => Promise<void>;
  dispatch: (type: string, command: ICommand, listening?: (data: any) => void) => Promise<IDispatchResult>;
  service: (type: string) => IManagedService;
}
