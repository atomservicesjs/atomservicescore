import { StreamLevel } from "../EventStream/StreamLevel";
import { EventProcessType } from "./EventProcessType";
import { EventVersioning } from "./EventVersioning";

export interface IServiceConfigurate {
  level: (name: string) => StreamLevel;
  processType: (name: string) => EventProcessType;
  versioning: (name: string) => EventVersioning;
}
