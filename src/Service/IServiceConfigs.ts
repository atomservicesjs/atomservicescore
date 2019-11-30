import { StreamLevel } from "../EventStream/StreamLevel";
import { EventProcessType } from "./EventProcessType";

export interface IServiceConfigs {
  events?: {
    [name: string]: {
      processType?: EventProcessType;
      level?: StreamLevel;
    };
    __: {
      level?: StreamLevel;
    };
  };
}
