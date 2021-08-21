export interface Storage {
  setItem(key: string, value: any): Promise<void>;
  getItem<DataT>(key: string): Promise<DataT | null>;
  deleteItem(key: string): Promise<void>;
  clear(): Promise<void>;
}
