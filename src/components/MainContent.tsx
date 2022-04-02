import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import SearchBar from './SearchBar';
import CompaniesGrid from './CompaniesGrid';

interface MainContentProps {}

const StyledContainerDiv = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  max-width: 960px;
  padding-top: 24px;
`;

const mockCompanyNames = [
  'Beaver Builders 1',
  'ProBlue 2',
  'GreenPower 3',
  'ContractorsNew 4',
  'Destiny Homes 5',
  'Granite Constructions 6',
  'Alaska Designs 7',
];

const MainContent: FunctionComponent<MainContentProps> = ({}) => {
  return (
    <StyledContainerDiv>
      <SearchBar companyNames={mockCompanyNames} />
      <CompaniesGrid />
    </StyledContainerDiv>
  );
};

export default MainContent;
