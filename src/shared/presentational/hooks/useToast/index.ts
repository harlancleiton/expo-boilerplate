import React from 'react';
import Toast from 'react-native-toast-message';

import { ToastProps } from './types';

export function useToast() {
  const toast = React.useCallback(({ type, message, title }: ToastProps) => {
    Toast.show({
      type,
      text1: title,
      text2: message
    });
  }, []);

  return toast;
}
