import { IReactStreamProcesses } from "../EventStream/IReactStreamProcesses";
import { StreamLevel } from "../EventStream/StreamLevel";
import { StreamProcessing } from "../EventStream/StreamProcessing";

export interface IServiceStreamDefinition {
  scope: string;
  type: string;
  handlers: {
    events: Array<{ name: string; level: StreamLevel; }>;
    processing: StreamProcessing;
  };
  reactions: {
    events: Array<{ scope: string; type: string; name: string; }>;
    processes: IReactStreamProcesses;
  };
}
