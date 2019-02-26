export interface IDirectEventStream<RefType = any> {
  directTo: (ref: RefType, data: any) => Promise<void>;
  listenTo: (ref: RefType, listener: (data: any) => void) => Promise<void>;
}
