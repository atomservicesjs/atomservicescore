import { StreamLevel } from "../EventStream/StreamLevel";
import { EventProcessType } from "./EventProcessType";

export interface IServiceConfigurate {
  allowDynamicVersion: (name: string) => boolean;
  level: (name: string) => StreamLevel;
  processType: (name: string) => EventProcessType;
}
