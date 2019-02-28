import { IContainer } from "../IContainer";
import { IContextProvider } from "../IContextProvider";
import { IService } from "../IService";

export type ServiceBootstrap = (bootstraper: IContextProvider | IContainer) => Promise<IService>;
