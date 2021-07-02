import {
  Control,
  FieldPath,
  FieldPathValue,
  FieldValues
} from 'react-hook-form';
import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputProps
} from 'react-native';

// @ts-ignore
export interface InputProps<TFieldValues extends FieldValues = FieldValues>
  extends TextInputProps {
  control: Control<TFieldValues>;
  name: FieldPath<TFieldValues>;
  label: string;
  icon?: JSX.Element;
  defaultValue?: FieldPathValue<TFieldValues, FieldPath<TFieldValues>>;
}

export type FormChangeHandler = (...event: any[]) => void;

export type FormBlurHandler = () => void;

export type BlurEvent = NativeSyntheticEvent<TextInputFocusEventData>;
export type FocusEvent = NativeSyntheticEvent<TextInputFocusEventData>;

export interface ContentProps {
  hasIcon?: boolean;
}
