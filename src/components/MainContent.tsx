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
  'Beaver Builders',
  'ProBlue',
  'GreenPower',
  'Contractors New',
  'Destiny Homes',
  'Granite Constructions',
  'Alaska Designs',
];

const mockSpecialties = ['Excavation', 'Plumbing', 'Electrical', 'Painting'];
const mockCities = ['Berlin', 'Hamburg', 'Munich', 'Frankfurt', 'Stuttgart'];
const mockDescriptions = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ita ne hoc quidem modo paria peccata sunt.',
  'Cumoe audissem Antiochum, Brute, ut solebam, cum M. In his igitur partibus duabus nihil erat, quod Zeno.',
  'Commutare gestiret duo Reges: constructio interrete. Quid ait Aristoteles reliquique Platonis alumni.',
  'Quod maxime efficit Theophrasti de beata vita liber, in quo multum admodum fortunae datur. Luxuriam non reprehendit.',
];
const mockLogos = [
  'https://picsum.photos/id/320/300',
  'https://picsum.photos/id/321/300',
  'https://picsum.photos/id/322/300',
  'https://picsum.photos/id/323/300',
  'https://picsum.photos/id/324/300',
];

const mockCompanies: Company[] = mockCompanyNames.map((item, idx) => ({
  name: item,
  specialties: [mockSpecialties[(idx + 1) % 4], mockSpecialties[(idx + 3) % 4]],
  description: mockDescriptions[idx % 4],
  city: mockCities[idx % 5],
  logo: mockLogos[idx % 5],
}));

const MainContent: FunctionComponent<MainContentProps> = ({}) => {
  return (
    <StyledContainerDiv>
      <SearchBar companyNames={mockCompanyNames} />
      <h1>{mockCompanies.length} Construction Companies</h1>
      <CompaniesGrid companies={mockCompanies} />
    </StyledContainerDiv>
  );
};

export default MainContent;
