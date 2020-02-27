export interface IEventStoresCursor<ItemType = any> {
  hasNext: () => Promise<boolean>;
  next: () => Promise<ItemType>;
  toArray: () => Promise<ItemType[]>;
}
