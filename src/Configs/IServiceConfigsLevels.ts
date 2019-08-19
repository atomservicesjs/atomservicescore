import { StreamLevel } from "../EventStream/StreamLevel";

export interface IServiceConfigsLevels {
  levels?: {
    _default: StreamLevel;
    [name: string]: StreamLevel;
  };
}
