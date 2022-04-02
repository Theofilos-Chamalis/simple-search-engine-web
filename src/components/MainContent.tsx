import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import SearchBar from './SearchBar';
import CompaniesGrid from './CompaniesGrid';
import { Company } from './CompanyCard';

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

const mockSpecialties = ['Excavation', 'Plumbing', 'Electrical', 'Painting'];
const mockCities = ['Berlin', 'Hamburg', 'Munich', 'Frankfurt', 'Stuttgart'];

const mockCompanies: Company[] = mockCompanyNames.map((item, idx) => ({
  name: item,
  specialties: [
    mockSpecialties[idx + (1 % 4)],
    mockSpecialties[idx + (2 % 4)],
    mockSpecialties[idx + (3 % 4)],
  ],
  city: mockCities[idx % 5],
}));

const MainContent: FunctionComponent<MainContentProps> = ({}) => {
  return (
    <StyledContainerDiv>
      <SearchBar companyNames={mockCompanyNames} />
      <CompaniesGrid companies={mockCompanies} />
    </StyledContainerDiv>
  );
};

export default MainContent;
