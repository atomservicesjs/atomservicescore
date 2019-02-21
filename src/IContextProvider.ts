import { IIdentifier } from "./IIdentifier";
import { IServiceContext } from "./IServiceContext";

export interface IContextProvider<AggregateID = any, EventID = any, QueryID = any> {
  identifier: () => IIdentifier;
  provide: (type: string, scope?: string) => IServiceContext;
}
