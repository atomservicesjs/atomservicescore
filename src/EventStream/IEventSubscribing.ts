import { IServiceStreamDefinition } from "../Service/IServiceStreamDefinition";

export interface IEventSubscribing {
  subscribe: (definition: IServiceStreamDefinition) => Promise<void>;
}
