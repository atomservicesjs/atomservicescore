import { EventLevel } from "./EventStreams/EventLevel";

export interface IServiceConfigs {
  events?: {
    levels?: {
      _default: EventLevel;
      [name: string]: EventLevel;
    };
  };
}
