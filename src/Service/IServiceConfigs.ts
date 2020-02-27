import { StreamLevel } from "../EventStream/StreamLevel";
import { EventProcessType } from "./EventProcessType";

export interface IServiceConfigs {
  service?: {
    allowDynamicVersion?: boolean;
    level?: StreamLevel;
    processType?: EventProcessType;
  };
  events?: {
    [name: string]: {
      allowDynamicVersion?: boolean;
      level?: StreamLevel;
      processType?: EventProcessType;
    };
  };
}
