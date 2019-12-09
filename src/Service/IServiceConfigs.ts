import { StreamLevel } from "../EventStream/StreamLevel";
import { EventProcessType } from "./EventProcessType";

export interface IServiceConfigs {
  service?: {
    level?: StreamLevel;
  };
  events?: {
    [name: string]: {
      allowDynamicVersion?: boolean;
      level?: StreamLevel;
      processType?: EventProcessType;
    };
  };
}
