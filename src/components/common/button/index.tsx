import styled from '@emotion/styled';
import type { FC, PropsWithChildren } from 'react';

type Props = {
  isActive?: boolean;
  isDisabled?: boolean;
  isTransparent?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
};

export const CommonButton: FC<PropsWithChildren<Props>> = ({
  isActive = false,
  isDisabled = false,
  type = 'button',
  isTransparent = false,
  children,
  onClick,
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick(event);
  };

  return (
    <ButtonElement
      onClick={handleClick}
      type={type}
      isActive={isActive}
      disabled={isDisabled}
      isTransparent={isTransparent}
    >
      {children}
    </ButtonElement>
  );
};

const ButtonElement = styled.button<{
  isActive: boolean;
  disabled?: boolean;
  isTransparent: boolean;
}>`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) =>
    props.isActive
      ? props.theme.colors.goldenBrownDeep
      : props.isTransparent
        ? props.theme.colors.transparent
        : props.theme.colors.goldenBrownMedium};
  padding: ${(props) => props.theme.spacing(2)} ${(props) => props.theme.spacing(4)};
  border: none;
  text-transform: uppercase;
  font-weight: 300;
  transition:
    background-color 0.2s ease,
    opacity 0.2s ease;
  line-height: 1;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : props.isActive ? 'default' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  &:hover {
    background-color: ${(props) =>
      props.disabled ? props.theme.colors.goldenBrownMedium : props.theme.colors.goldenBrownDeep};
  }

  &:focus {
    outline: none;
  }
`;
