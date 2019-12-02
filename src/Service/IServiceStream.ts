import { StreamLevel } from "../EventStream/StreamLevel";
import { EventProcessType } from "./EventProcessType";

export interface IServiceStream {
  allowNoVersion: (name: string) => boolean;
  level: (name: string) => StreamLevel;
  processType: (name: string) => EventProcessType;
}
