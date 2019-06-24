import { StreamLevel } from "./EventStream/StreamLevel";

export interface IServiceLevelsConfigs {
  levels?: {
    _default: StreamLevel;
    [name: string]: StreamLevel;
  };
}

export interface IServiceConfigs extends IServiceLevelsConfigs {
  type: string;
  subscribe?: {
    [type: string]: StreamLevel[];
  };
  reaction?: {
    [scope: string]: {
      [type: string]: string[];
    };
  };
}
