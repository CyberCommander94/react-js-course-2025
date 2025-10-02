import styled from '@emotion/styled';

const HomePage = () => {
  return (
    <PageContainer>
      Home page
    </PageContainer>
  )
}

export default HomePage;

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
