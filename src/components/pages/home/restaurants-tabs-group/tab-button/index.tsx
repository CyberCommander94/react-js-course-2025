import type { IRestaurant } from '@/types';
import styled from '@emotion/styled';
import type { FC } from 'react';

type Props = {
  restaurant: IRestaurant;
  isActive: boolean;
  onClick: (id: string) => void;
};

export const TabButton: FC<Props> = ({ restaurant, isActive, onClick }) => {
  const { name, id } = restaurant;
  return (
    <ButtonElement onClick={() => onClick(String(id))} isActive={isActive}>
      {name}
    </ButtonElement>
  );
};

const ButtonElement = styled.button<{ isActive: boolean }>`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) =>
    props.isActive ? props.theme.colors.roseBrownDark : props.theme.colors.roseBrownMedium};
  padding: ${(props) => props.theme.spacing(3)} ${(props) => props.theme.spacing(4)};
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 300;
  pointer-events: ${(props) => (props.isActive ? 'none' : 'all')};

  &:hover {
    background-color: ${(props) => props.theme.colors.roseBrownDark};
  }

  &:focus {
    outline: none;
  }
`;
