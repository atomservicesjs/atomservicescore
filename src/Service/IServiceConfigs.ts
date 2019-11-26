import { StreamLevel } from "../EventStream/StreamLevel";

export interface IServiceConfigs {
  levels?: {
    _default: StreamLevel;
    [name: string]: StreamLevel;
  };
}
