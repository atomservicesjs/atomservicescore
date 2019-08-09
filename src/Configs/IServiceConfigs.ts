import { StreamLevel } from "../Core/EventStream/StreamLevel";
import { IServiceConfigsLevels } from "./IServiceConfigsLevels";

export interface IServiceConfigs extends IServiceConfigsLevels {
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
