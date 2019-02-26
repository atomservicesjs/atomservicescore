import { EventEmitter } from "events";
import { IEventEmitter } from "../common/IEventEmitter";

export class AtomEventEmitter extends EventEmitter implements IEventEmitter { }
