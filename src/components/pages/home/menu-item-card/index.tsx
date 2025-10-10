import type { IMenuItem } from '@/types';
import { useState, type FC } from 'react';
import styled from '@emotion/styled';
import { Counter } from '@/components/pages/home/counter';
import { Circle } from 'lucide-react';

type Props = {
  menuItem: IMenuItem;
};

export const MenuItemCard: FC<Props> = ({ menuItem }) => {
  const [count, setCount] = useState(0);

  return (
    <CardWrapper>
      <CardHeader>
        <CardTitleWrapper>
          <CardTitle>{menuItem.name}</CardTitle>
          <CardPrice>€{menuItem.price}</CardPrice>
        </CardTitleWrapper>
        <Counter value={count} step={1} minValue={0} maxValue={5} onValueChange={setCount} />
      </CardHeader>
      <IngredientsListTitle>Ingredients:</IngredientsListTitle>
      <IngredientsList>
        {menuItem.ingredients.map((ingredient, index) => (
          <IngredientItem key={index}>
            <CircleIcon />
            {ingredient}
          </IngredientItem>
        ))}
      </IngredientsList>
      <BottomBorder />
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  width: 100%;
  border-left: 4px solid ${(props) => props.theme.colors.goldenBrownDeep};
  border-right: 4px solid ${(props) => props.theme.colors.goldenBrownMedium};
  padding: ${(props) => props.theme.spacing(4)};
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing(2)};
  position: relative;
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
  color: ${(props) => props.theme.colors.goldenBrownMedium};
  margin: 0;
`;

const IngredientsListTitle = styled.p`
  font-weight: 700;
  margin: ${(props) => props.theme.spacing(2)} 0 0 0;
`;

const IngredientsList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  margin: ${(props) => props.theme.spacing(1)} 0 0 0;
  display: flex;
  gap: ${(props) => props.theme.spacing(1)};
  align-items: center;
`;

const IngredientItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing(1)};
  padding: ${(props) => props.theme.spacing(1)} ${(props) => props.theme.spacing(2)};
`;

const CircleIcon = styled(Circle)`
  width: 5px;
  height: 5px;
  margin-top: 1px;
  fill: ${(props) => props.theme.colors.goldenBrownMedium};
  color: ${(props) => props.theme.colors.goldenBrownMedium};
`;

const BottomBorder = styled.hr`
  height: 1px;
  width: 100%;
  border: none;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.goldenBrownDeep},
    ${(props) => props.theme.colors.roseBrownDark},
    ${(props) => props.theme.colors.goldenBrownMedium}
  );
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0;
`;
