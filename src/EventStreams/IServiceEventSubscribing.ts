import { ServiceEventSubscribing } from "./ServiceEventSubscribing";
import { ServiceReactionSubscribing } from "./ServiceReactionSubscribing";

export interface IServiceEventSubscribing {
  react: ServiceReactionSubscribing;
  subscribe: ServiceEventSubscribing;
}
