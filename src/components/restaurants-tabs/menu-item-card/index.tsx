import type { IMenuItem } from '@/types';
import type { FC } from 'react';
import styled from '@emotion/styled';
import { Check } from 'lucide-react';
import { ItemsCounter } from '../items-counter';

type Props = {
  menuItem: IMenuItem;
};

export const MenuItemCard: FC<Props> = ({ menuItem }) => {
  return (
    <CardWrapper>
      <CardHeader>
        <CardTitleWrapper>
          <CardTitle>{menuItem.name}</CardTitle>
          <CardPrice>€{menuItem.price}</CardPrice>
        </CardTitleWrapper>
        <ItemsCounter />
      </CardHeader>
      <IngredientsListTitle>Ingredients:</IngredientsListTitle>
      <IngredientsList>
        {menuItem.ingredients.map((ingredient, index) => (
          <IngredientItem key={index}>
            <CheckIcon />
            {ingredient}
          </IngredientItem>
        ))}
      </IngredientsList>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  width: 100%;
  border-left: 4px solid ${(props) => props.theme.colors.roseBrownMedium};
  border-right: 4px solid ${(props) => props.theme.colors.roseBrownMedium};
  border-bottom: 1px solid ${(props) => props.theme.colors.roseBrownMedium};
  padding: ${(props) => props.theme.spacing(4)};
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing(2)};
`;

const CardHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 300;
  gap: ${(props) => props.theme.spacing(2)};
`;

const CardTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing(3)};
`;

const CardTitle = styled.p`
  font-weight: 600;
  margin: 0;
  font-size: 1.1rem;
`;

const CardPrice = styled.p`
  font-weight: 700;
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.warmBeigeMedium};
  margin: 0;
`;

const IngredientsListTitle = styled.p`
  font-weight: 700;
  margin: ${(props) => props.theme.spacing(2)} 0 0 0;
`;

const IngredientsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${(props) => props.theme.spacing(1)} 0 0 0;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing(1)};
`;

const IngredientItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing(1)};
  padding: ${(props) => props.theme.spacing(1)} ${(props) => props.theme.spacing(2)};
  font-size: 0.95rem;
  color: ${(props) => props.theme.colors.roseBrownDark};
`;

const CheckIcon = styled(Check)`
  width: 16px;
  height: 16px;
  color: ${(props) => props.theme.colors.roseBrownDark};
`;
