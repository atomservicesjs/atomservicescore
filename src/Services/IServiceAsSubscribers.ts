export interface IServiceAsSubscribers {
  scope: string;
  service: string;
  asSubscribers: Array<{
    scope: string;
    type: string;
    level: string;
    name: string;
  }>;
}
