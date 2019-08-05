export interface IEventDirecting<ProcessingResult = any> {
  directTo: (ref: string, data: any) => Promise<ProcessingResult>;
  listenTo: (ref: string, listener: (data: any) => void) => Promise<ProcessingResult>;
}
