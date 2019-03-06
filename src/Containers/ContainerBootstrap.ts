import { IContainer } from "../IContainer";
import { IContextProvider } from "../IContextProvider";

export type ContainerBootstrap = (ContextProvider: IContextProvider) => Promise<IContainer>;
