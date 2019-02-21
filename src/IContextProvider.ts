import { IIdentifier } from "./IIdentifier";
import { IServiceBootstrapable } from "./Services/IServiceBootstrapable";

export interface IContextProvider<AggregateID = any, EventID = any, QueryID = any> extends IServiceBootstrapable {
  identifier: () => IIdentifier;
}
