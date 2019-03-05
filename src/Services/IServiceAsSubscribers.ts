export interface IServiceAsSubscribers {
  scope: string;
  type: string;
  asSubscribers: Array<{
    scope: string;
    type: string;
    level: string;
    name: string;
  }>;
}
