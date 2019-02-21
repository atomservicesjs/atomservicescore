import { IEvent } from "../IEvent";
import { IPublishingResult } from "./IPublishingResult";

export type ServiceEventPublishing = (event: IEvent) => Promise<IPublishingResult>;
