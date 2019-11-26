import { StreamLevel } from "../EventStream/StreamLevel";

export interface IServiceStreamLevel {
  level: (name: string) => StreamLevel;
}
