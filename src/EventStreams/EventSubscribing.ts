import { EventLevel } from "./EventLevel";
import { EventProcess } from "./EventProcess";

export type EventSubscribing = (
  on: { name: string; type: string; scope: string; level: EventLevel; },
  to: { channel: string; type: string; scope: string; },
  process: EventProcess,
) => void;
