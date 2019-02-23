import { IEvent } from "../IEvent";

export interface IServiceEventDispatch {
  dispatch: (event: IEvent) => Promise<void>;
}
