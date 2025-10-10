import styled from '@emotion/styled';
import { type FC } from 'react';
import { CommonButton } from '@/components/common/button';
import { Plus, Minus } from 'lucide-react';

type Props = {
  minValue?: number | undefined;
  maxValue?: number | undefined;
  value: number;
  step: number;
  onValueChange: (rating: number) => void;
};

export const Counter: FC<Props> = ({ minValue, maxValue, value, step, onValueChange }) => {
  const isAddBlocked = maxValue != undefined && value === maxValue;
  const isMinusBlocked = minValue != undefined && minValue === value;

  const handleAdd = () => {
    if (isAddBlocked) {
      return;
    }

    onValueChange(value + step);
  };

  const handleMinus = () => {
    if (isMinusBlocked) {
      return;
    }

    onValueChange(value - step);
  };

  return (
    <CounterWrapper>
      <CommonButton onClick={handleMinus} isDisabled={isMinusBlocked}>
        <MinusIcon strokeWidth={2} />
      </CommonButton>
      <CountText>{value}</CountText>
      <CommonButton onClick={handleAdd} isDisabled={isAddBlocked}>
        <PlusIcon strokeWidth={2} />
      </CommonButton>
    </CounterWrapper>
  );
};

const CounterWrapper = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing(2)};
  align-items: center;
`;

const CountText = styled.p`
  font-weight: 600;
  font-size: 1rem;
  margin: 0;
  width: 30px;
  text-align: center;
`;

const PlusIcon = styled(Plus)`
  width: 14px;
  height: 14px;
  color: ${(props) => props.theme.colors.white};
`;

const MinusIcon = styled(Minus)`
  width: 14px;
  height: 14px;
  color: ${(props) => props.theme.colors.white};
`;
