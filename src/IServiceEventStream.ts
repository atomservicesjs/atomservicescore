import { IServiceDirectStream } from "./EventStreams/IServiceDirectStream";
import { IServiceEventDispatch } from "./EventStreams/IServiceEventDispatch";
import { IServiceEventRegister } from "./EventStreams/IServiceEventRegister";

export interface IServiceEventStream extends IServiceDirectStream, IServiceEventDispatch, IServiceEventRegister { }
