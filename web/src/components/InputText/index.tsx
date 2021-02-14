import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputTProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const InputText: React.FC<InputTProps> = ({ name, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  return (
    <Container>
      <input ref={inputRef} defaultValue={defaultValue} {...rest} />
    </Container>
  );
};

export default InputText;
