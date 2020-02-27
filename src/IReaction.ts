import { IEvent } from "./IEvent";
import { ReactionReact } from "./Reaction/ReactionReact";

export interface IReaction<Event extends IEvent = IEvent> {
  scope: string;
  type: string;
  name: string;
  react: ReactionReact<Event>;
}
