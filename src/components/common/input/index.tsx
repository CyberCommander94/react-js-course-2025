import styled from '@emotion/styled';
import type { FC, ChangeEvent } from 'react';

type Props = {
  value: string;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isDisabled?: boolean;
  type?: string;
  name?: string;
};

export const CommonInput: FC<Props> = ({
  value,
  placeholder = '',
  onChange,
  isDisabled = false,
  type = 'text',
  name,
}) => {
  return (
    <InputElement
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={isDisabled}
      type={type}
      name={name}
    />
  );
};

const InputElement = styled.input`
  width: 100%;
  padding: ${(props) => props.theme.spacing(2)};
  border: none;
  background-color: ${(props) => props.theme.colors.white};
  font-size: 14px;
  font-weight: 300;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &::placeholder {
    color: ${(props) => props.theme.colors.coolGrayDarker};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px ${(props) => props.theme.colors.goldenBrownMedium};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
