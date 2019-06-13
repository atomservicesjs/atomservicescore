import { StreamLevel } from "./EventStream/StreamLevel";

export interface IServiceConfigs {
  type: string;
  levels?: {
    _default: StreamLevel;
    [name: string]: StreamLevel;
  };
  subscribe?: {
    [type: string]: StreamLevel[];
  };
  reaction?: {
    [scope: string]: {
      [type: string]: string[];
    };
  };
}
