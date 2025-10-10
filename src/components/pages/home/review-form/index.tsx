import type { IReviewsItem } from '@/types';
import { useReducer, type FC } from 'react';
import styled from '@emotion/styled';
import { Counter } from '@/components/pages/home/counter';
import { reviewFormReducer } from '@/components/pages/home/review-form/reducer';
import { CommonButton } from '@/components/common/button';
import { CommonInput } from '@/components/common/input';
import { CommonTextarea } from '@/components/common/textarea';

const INITIAL_FORM_DATA: Omit<IReviewsItem, 'id'> = {
  user: '',
  rating: 0,
  text: '',
};

type Props = {
  closeFormHandler: () => void;
};

export const ReviewForm: FC<Props> = ({ closeFormHandler }) => {
  const [formState, dispatch] = useReducer(reviewFormReducer, INITIAL_FORM_DATA);

  const { user, rating, text } = formState;

  const setUser = (user: string) => dispatch({ type: 'SET_USER', payload: user });
  const setRating = (rating: number) => dispatch({ type: 'SET_RATING', payload: rating });
  const setText = (text: string) => dispatch({ type: 'SET_TEXT', payload: text });
  const resetForm = (initFormData: Omit<IReviewsItem, 'id'>) =>
    dispatch({ type: 'RESET_FORM', payload: initFormData });

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <FormWrapper>
      <FormTitle>Add your review</FormTitle>
      <FormContent>
        <CommonInput
          value={user}
          name="name"
          placeholder="Name"
          onChange={(event) => {
            setUser(event.target.value);
          }}
        />
        <MarkWrapper>
          <p>Mark:</p>
          <Counter value={rating} step={1} minValue={0} maxValue={5} onValueChange={setRating} />
        </MarkWrapper>
        <CommonTextarea
          value={text}
          name="text"
          placeholder="Review text"
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
        <ButtonsWrapper>
          <CommonButton onClick={closeFormHandler}>
            <span>Cancel</span>
          </CommonButton>
          <CommonButton type="reset" onClick={() => resetForm(INITIAL_FORM_DATA)}>
            <span>Clear</span>
          </CommonButton>
          <CommonButton type="submit" onClick={handleSubmit}>
            <span>Submit</span>
          </CommonButton>
        </ButtonsWrapper>
      </FormContent>
      <BottomBorder />
    </FormWrapper>
  );
};

const FormTitle = styled.p`
  width: 100%;
  font-weight: 600;
  font-size: 1.1rem;
`;

const FormWrapper = styled.div`
  width: 100%;
  border-left: 4px solid ${(props) => props.theme.colors.goldenBrownDeep};
  border-right: 4px solid ${(props) => props.theme.colors.goldenBrownMedium};
  padding: ${(props) => props.theme.spacing(4)};
  margin-bottom: ${(props) => props.theme.spacing(4)};
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing(2)};
  position: relative;
`;

const FormContent = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
  gap: ${(props) => props.theme.spacing(2)};
`;

const MarkWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing(2)};
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
  gap: ${(props) => props.theme.spacing(1)};
  margin-top: ${(props) => props.theme.spacing(4)};
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
