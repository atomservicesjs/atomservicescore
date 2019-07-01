import { StreamLevel } from "../EventStream/StreamLevel";
import { IServiceLevelsConfigs } from "./IServiceLevelsConfigs";

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
