import { IReactStreamProcesses } from "./IReactStreamProcesses";
import { StreamLevel } from "./StreamLevel";
import { StreamProcessing } from "./StreamProcessing";

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
