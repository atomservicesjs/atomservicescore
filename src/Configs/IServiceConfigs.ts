import { StreamLevel } from "../EventStream/StreamLevel";
import { IEventStream } from "../IEventStream";

export interface IServiceConfigs {
  type: string;
  scope?: string;
  levels?: {
    _default: StreamLevel;
    [name: string]: StreamLevel;
  };
  EventStream: IEventStream;
}
