// import { StreamLevel } from "../EventStream/StreamLevel";
import { IServiceConfigsLevels } from "./IServiceConfigsLevels";

export interface IServiceConfigs extends IServiceConfigsLevels {
  scope?: string;
}
