import { StreamLevel } from "../EventStream/StreamLevel";

export interface IServiceStreamLevel {
  type: () => string;
  level: (name: string) => StreamLevel;
}
