import { IServiceStreamDefinition } from "../Service/IServiceStreamDefinition";

export interface IEventSubscribing {
  connect: () => Promise<void>;
  subscribe: (definition: IServiceStreamDefinition) => Promise<void>;
}
