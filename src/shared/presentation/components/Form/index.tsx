import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { FormProps } from './types';

export const Form: React.FC<FormProps> = ({ children, ...rest }) => {
  const isIOS = Platform.OS === 'ios';

  const behavior = isIOS ? 'padding' : 'height';

  return (
    <KeyboardAvoidingView behavior={behavior} {...rest}>
      {children}
    </KeyboardAvoidingView>
  );
};
