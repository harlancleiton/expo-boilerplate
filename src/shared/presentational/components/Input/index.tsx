import React from 'react';
import { Controller, FieldError } from 'react-hook-form';
import { TextInput } from 'react-native';

import {
  Container,
  Content,
  Error,
  EyeIcon,
  EyeOffIcon,
  Label,
  StyledInput
} from './styles';
import {
  BlurEvent,
  FocusEvent,
  FormBlurHandler,
  FormChangeHandler,
  InputProps
} from './types';

export function Input({
  control,
  name,
  label,
  onChangeText,
  onBlur,
  onFocus,
  defaultValue,
  secureTextEntry,
  icon,
  ...rest
}: InputProps) {
  const inputRef = React.useRef<TextInput>(null);

  const [visibleSecureText, setVisibleSecureText] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);

  function handleChangeText(onChange: FormChangeHandler) {
    return function (text: string) {
      onChange(text);

      if (onChangeText) onChangeText(text);
    };
  }

  function handleBlur(onBlurFromForm: FormBlurHandler) {
    return function (event: BlurEvent) {
      onBlurFromForm();

      setIsFocused(false);

      if (onBlur) onBlur(event);
    };
  }

  function handleFocus(event: FocusEvent) {
    setIsFocused(true);

    if (onFocus) onFocus(event);
  }

  function handlePressContainer() {
    if (inputRef.current) inputRef.current.focus();
  }

  function toggleVisibleSecureText() {
    setVisibleSecureText(prevState => !prevState);
  }

  function renderEyeIcon(error?: FieldError) {
    if (error && !isFocused) return null;

    if (secureTextEntry && !visibleSecureText)
      return <EyeIcon onPress={toggleVisibleSecureText} />;

    if (secureTextEntry && visibleSecureText)
      return <EyeOffIcon onPress={toggleVisibleSecureText} />;

    return null;
  }

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({
        field: { value, onChange, onBlur: onBlurFromForm, ref },
        fieldState: { error }
      }) => {
        return (
          <Container onPress={handlePressContainer}>
            {icon && <>{icon}</>}

            <Content hasIcon={!!icon}>
              <Label>{label}</Label>

              <StyledInput
                {...rest}
                ref={e => {
                  ref(e);
                  inputRef.current = e;
                }}
                onChangeText={handleChangeText(onChange)}
                onBlur={handleBlur(onBlurFromForm)}
                onFocus={handleFocus}
                value={value}
                secureTextEntry={secureTextEntry && !visibleSecureText}
              />
            </Content>

            {renderEyeIcon(error)}

            {error && !isFocused && <Error>{error.message}</Error>}
          </Container>
        );
      }}
    ></Controller>
  );
}
