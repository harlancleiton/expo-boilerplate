import {
  Control,
  FieldPath,
  FieldPathValue,
  FieldValues,
  UnpackNestedValue
} from 'react-hook-form';
import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputProps
} from 'react-native';

// @ts-ignore
export interface InputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends TextInputProps {
  name: TName;
  defaultValue?: UnpackNestedValue<FieldPathValue<TFieldValues, TName>>;
  control: Control<TFieldValues>;

  label: string;
  icon?: JSX.Element;
}

export type FormChangeHandler = (...event: any[]) => void;

export type FormBlurHandler = () => void;

export type BlurEvent = NativeSyntheticEvent<TextInputFocusEventData>;
export type FocusEvent = NativeSyntheticEvent<TextInputFocusEventData>;

export interface ContentProps {
  hasIcon?: boolean;
}
