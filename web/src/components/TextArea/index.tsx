import React, { TextareaHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { TextContainer } from './styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
}

const TextArea: React.FC<TextAreaProps> = ({ name, ...rest }) => {
  const TextAreaRef = useRef(null);
  const { defaultValue, fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: TextAreaRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  return (
    <TextContainer ref={TextAreaRef} defaultValue={defaultValue} {...rest} />
  );
};

export default TextArea;
