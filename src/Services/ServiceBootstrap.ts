import { IContextProvider } from "../IContextProvider";
import { IService } from "../IService";

export type ServiceBootstrap = (ContextProvider: IContextProvider) => Promise<IService>;
