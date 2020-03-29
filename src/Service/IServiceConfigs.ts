import { StreamLevel } from "../EventStream/StreamLevel";
import { EventProcessType } from "./EventProcessType";
import { EventVersioning } from "./EventVersioning";

export interface IServiceConfigs {
  service?: {
    level?: StreamLevel;
    processType?: EventProcessType;
    versioning?: EventVersioning;
  };
  events?: {
    [name: string]: {
      level?: StreamLevel;
      processType?: EventProcessType;
      versioning?: EventVersioning;
    };
  };
}
