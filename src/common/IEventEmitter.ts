export interface IEventEmitter {
  emit: (event: string | symbol, ...args: any[]) => boolean;
  on: (event: string | symbol, listener: (...args: any[]) => void) => void;
  once: (event: string | symbol, listener: (...args: any[]) => void) => void;
}
