import { StreamLevel } from "../EventStream/StreamLevel";

export interface IServiceLevelsConfigs {
  levels?: {
    _default: StreamLevel;
    [name: string]: StreamLevel;
  };
}
