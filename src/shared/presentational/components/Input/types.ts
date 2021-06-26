import React from 'react';
import { Control } from 'react-hook-form';
import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputProps
} from 'react-native';

export interface InputProps extends TextInputProps {
  control: Control;
  name: string;
  label: string;
  icon?: JSX.Element;
}

export type FormChangeHandler = (...event: any[]) => void;

export type FormBlurHandler = () => void;

export type BlurEvent = NativeSyntheticEvent<TextInputFocusEventData>;

export interface ContentProps {
  hasIcon?: boolean;
}
