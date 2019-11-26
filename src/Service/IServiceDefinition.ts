import { IEventHandler } from "../IEventHandler";

export interface IServiceDefinition {
  type: string;
  EventHandlers?: IEventHandler[];
}
