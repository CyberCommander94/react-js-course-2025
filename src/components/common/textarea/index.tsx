import styled from '@emotion/styled';
import type { FC, ChangeEvent } from 'react';

type Props = {
  value: string;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  isDisabled?: boolean;
  rows?: number;
  name?: string;
};

export const CommonTextarea: FC<Props> = ({
  value,
  placeholder = '',
  onChange,
  isDisabled = false,
  rows = 4,
  name,
}) => {
  return (
    <TextAreaElement
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={isDisabled}
      rows={rows}
      name={name}
    />
  );
};

const TextAreaElement = styled.textarea`
  width: 100%;
  padding: ${(props) => props.theme.spacing(2)};
  border: none;
  background-color: ${(props) => props.theme.colors.white};
  font-size: 14px;
  font-weight: 300;
  resize: vertical;
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
