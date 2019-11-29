import { IServiceStreamDefinition } from "./IServiceStreamDefinition";

export interface IEventSubscribing {
  subscribe: (definition: IServiceStreamDefinition) => void;
}
