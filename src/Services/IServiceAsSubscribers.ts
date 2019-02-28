export interface IServiceAsSubscribers {
  scope: string;
  service: string;
  asSubscribers: Array<{
    scope: string;
    type: string;
    name: string;
  }>;
}
