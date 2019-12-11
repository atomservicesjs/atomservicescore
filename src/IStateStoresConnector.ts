import { IStateStoresBridge } from "./IStateStoresBridge";

export interface IStateStoresConnector {
  connect: () => Promise<IStateStoresBridge>;
}
