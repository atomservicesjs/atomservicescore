import { StreamLevel } from "../EventStream/StreamLevel";
import { EventProcessType } from "./EventProcessType";

export interface IServiceConfigs {
  events?: {
    [name: string]: {
      allowNoVersion?: boolean;
      level?: StreamLevel;
      processType?: EventProcessType;
    };
    __: {
      level?: StreamLevel;
    };
  };
}
