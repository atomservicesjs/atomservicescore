import { IServiceEventStream } from "./IServiceEventStream";
import { IServiceIdentifier } from "./IServiceIdentifier";

export interface IServiceContext extends IServiceEventStream, IServiceIdentifier {
  scope: () => string;
}
