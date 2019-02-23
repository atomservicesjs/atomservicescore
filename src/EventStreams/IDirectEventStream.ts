export interface IDirectEventStream<RefType = any> {
  directTo: (ref: RefType, data: any) => void;
  listenTo: (ref: RefType, listener: (data: any) => void) => void;
}
