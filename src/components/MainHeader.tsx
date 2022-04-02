import { FunctionComponent } from 'react';
import { Header } from '@mantine/core';
import styled from '@emotion/styled';

interface MainHeaderProps {}

const StyledDivContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

const StyledImage = styled.img`
  max-height: 100%;
`;

const StyledHeaderTitle = styled.h1`
  margin: auto;
  font-weight: 500;
`;

const MainHeader: FunctionComponent<MainHeaderProps> = ({}) => {
  return (
    <Header height={60} p="xs">
      <StyledDivContainer>
        <StyledImage src={'/src/assets/icon-192.png'} alt={'Header logo'} />
        <StyledHeaderTitle>SIMPLE SEARCH ENGINE</StyledHeaderTitle>
      </StyledDivContainer>
    </Header>
  );
};

export default MainHeader;
