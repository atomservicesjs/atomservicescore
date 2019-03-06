import { IContextProvider } from "./IContextProvider";

export interface IContainerConfigs {
  provider?: IContextProvider;
  [key: string]: any;
}
