import { StreamLevel } from "../EventStream/StreamLevel";

export interface IServiceConfigs {
  events?: {
    [name: string]: {
      handleProcess?: "asynchronous" | "synchronous";
      level?: StreamLevel;
    };
    __: {
      level?: StreamLevel;
    };
  };
}
