import { StreamLevel } from "./Core/EventStream/StreamLevel";

export interface IServiceStreamLevel {
  type: () => string;
  level: (name: string) => StreamLevel;
}
