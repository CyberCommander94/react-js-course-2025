import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const NotFound = () => {
  return (
    <PageContainer>
      <StatusNumber>404</StatusNumber>
      <StatusTitle>Page not found</StatusTitle>
      <StyledLink to='/'>Back to the home page</StyledLink>
    </PageContainer>
  )
}

export default NotFound;

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StatusNumber = styled.p`
  font-weight: 700;
  font-size: 100px;
  line-height: 1;
  margin: 0;
`;

const StatusTitle = styled.h1`
  font-size: 28px;
  margin: 20px 0 60px 0;
`;

const StyledLink = styled(Link)`
  font-weight: 500;
  font-size: 16px;
  font-weight: 300;
`;
