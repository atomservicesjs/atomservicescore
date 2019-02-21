export interface INotifiable {
  eventNames: () => Array<string | symbol>;
  on: (event: string | symbol, listener: (...args: any[]) => void) => void;
  once: (event: string | symbol, listener: (...args: any[]) => void) => void;
}
