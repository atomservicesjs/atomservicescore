import { StreamLevel } from "../EventStream/StreamLevel";
import { EventProcessType } from "./EventProcessType";

export interface IServiceConfigs {
  service?: {
    level?: StreamLevel;
  };
  events?: {
    [name: string]: {
      allowNoVersion?: boolean;
      level?: StreamLevel;
      processType?: EventProcessType;
    };
  };
}
