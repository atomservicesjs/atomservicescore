import { StreamLevel } from "../EventStream/StreamLevel";
import { EventProcessType } from "./EventProcessType";

export interface IServiceStream {
  level: (name: string) => StreamLevel;
  processType: (name: string) => EventProcessType;
}
