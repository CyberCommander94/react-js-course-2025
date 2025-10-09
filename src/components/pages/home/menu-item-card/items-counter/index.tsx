import styled from '@emotion/styled';
import { useState, type FC } from 'react';

export const ItemsCounter: FC = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    const newCount = count + 1;

    if (newCount > 5) {
      return;
    }

    setCount(newCount);
  };

  const handleMinus = () => {
    const newCount = count - 1;

    if (newCount < 0) {
      return;
    }

    setCount(newCount);
  };

  return (
    <CounterWrapper>
      <ButtonElement onClick={handleMinus} isDisabled={count - 1 < 0}>
        <div>-</div>
      </ButtonElement>
      <CountText>{count}</CountText>
      <ButtonElement onClick={handleAdd} isDisabled={count + 1 > 5}>
        <div>+</div>
      </ButtonElement>
    </CounterWrapper>
  );
};

const CounterWrapper = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing(2)};
  align-items: center;
`;

const ButtonElement = styled.button<{ isDisabled: boolean }>`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.roseBrownMedium};
  width: 28px;
  height: 28px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  opacity: ${(props) => (props.isDisabled ? '0.5' : '1')};
  font-weight: 300;
  font-size: 2rem;
  line-height: 1;
  pointer-events: ${(props) => (props.isDisabled ? 'none' : 'all')};
  user-select: none;

  &:hover {
    background-color: ${(props) => props.theme.colors.roseBrownDark};
  }

  &:focus {
    outline: none;
  }
`;

const CountText = styled.p`
  font-weight: 600;
  font-size: 1rem;
  margin: 0;
  width: 30px;
  text-align: center;
`;
