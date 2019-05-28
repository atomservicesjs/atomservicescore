export interface IEventDirecting {
  directTo: (ref: string, data: any) => Promise<void>;
  listenTo: (ref: string, listener: (data: any) => void) => Promise<void>;
}
