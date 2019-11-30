import { StreamLevel } from "../EventStream/StreamLevel";
import { EventProcessType } from "./EventProcessType";

export interface IServiceConfigs {
  events?: {
    [name: string]: {
      handleProcess?: EventProcessType;
      level?: StreamLevel;
    };
    __: {
      level?: StreamLevel;
    };
  };
}
