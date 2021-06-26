import React from 'react';
import { Controller } from 'react-hook-form';
import { TextInput } from 'react-native';

import {
  Container,
  Content,
  EyeIcon,
  EyeOffIcon,
  Label,
  StyledInput
} from './styles';
import {
  BlurEvent,
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
  defaultValue,
  secureTextEntry,
  icon,
  ...rest
}: InputProps) {
  const inputRef = React.useRef<TextInput>(null);

  const [visibleSecureText, setVisibleSecureText] = React.useState(false);

  function handleChangeText(onChange: FormChangeHandler) {
    return function (text: string) {
      onChange(text);

      if (onChangeText) onChangeText(text);
    };
  }

  function handleBlur(onBlurFromForm: FormBlurHandler) {
    return function (event: BlurEvent) {
      onBlurFromForm();

      if (onBlur) onBlur(event);
    };
  }

  function handlePressContainer() {
    if (inputRef.current) inputRef.current.focus();
  }

  function toggleVisibleSecureText() {
    setVisibleSecureText(prevState => !prevState);
  }

  function renderEyeIcon() {
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
      render={({ field: { value, onChange, onBlur: onBlurFromForm } }) => (
        <Container onPress={handlePressContainer}>
          {icon && <>{icon}</>}

          <Content hasIcon={!!icon}>
            <Label>{label}</Label>

            <StyledInput
              {...rest}
              ref={inputRef}
              onChangeText={handleChangeText(onChange)}
              onBlur={handleBlur(onBlurFromForm)}
              value={value}
              secureTextEntry={secureTextEntry && !visibleSecureText}
            />
          </Content>

          {renderEyeIcon()}
        </Container>
      )}
    ></Controller>
  );
}
