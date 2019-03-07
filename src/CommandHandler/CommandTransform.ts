import { IAtomCommand } from "../IAtomCommand";
import { IAtomEvent } from "../IAtomEvent";
import { IServiceIdentifier } from "../IServiceIdentifier";

export type CommandTransform<
  Command extends IAtomCommand = IAtomCommand,
  Event extends IAtomEvent = IAtomEvent,
  > = (command: Command, type: string, identifier: IServiceIdentifier) => Event;
