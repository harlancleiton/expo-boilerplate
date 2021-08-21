import * as SecureStore from 'expo-secure-store';

import { Storage } from '../../data';

export class ExpoSecureStore implements Storage {
  async setItem(key: string, value: any): Promise<void> {
    const valueParsedToString = JSON.stringify(value);

    await SecureStore.setItemAsync(key, valueParsedToString);
  }

  async getItem<DataT = any>(key: string): Promise<DataT | null> {
    const value = await SecureStore.getItemAsync(key);

    if (!value) return null;

    const valueParsed = JSON.parse(value) as DataT;
    return valueParsed;
  }

  async deleteItem(key: string): Promise<void> {
    await SecureStore.deleteItemAsync(key);
  }

  async clear(): Promise<void> {
    // TODO add implementation
  }
}
