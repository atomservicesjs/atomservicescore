export interface IServiceDescription {
  scope: string;
  service: string;
  handlers: Array<{
    level: string;
    name: string;
  }>;
  reactions: Array<{
    scope: string;
    type: string;
    name: string;
  }>;
}
