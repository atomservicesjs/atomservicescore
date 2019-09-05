import { StreamLevel } from "../EventStream/StreamLevel";
import { IServiceConfigsLevels } from "./IServiceConfigsLevels";

export interface IServiceConfigs extends IServiceConfigsLevels {
  scope: string;
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
