export interface IServiceContainer {
  connect: () => Promise<void>;
  scope: () => string;
}
