import { EventLevel } from "../EventStreams/EventLevel";

export interface IServiceDescription {
  scope: string;
  type: string;
  commands: string[];
  handlers: Array<{
    level: EventLevel;
    name: string;
  }>;
  reactions: Array<{
    scope: string;
    type: string;
    name: string;
  }>;
}
