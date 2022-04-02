import React, { FunctionComponent, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import SearchBar from './SearchBar';
import CompaniesGrid from './CompaniesGrid';
import { ICity, ICompany, ISpecialty } from './CompanyCard';
import CompaniesFilters from './CompaniesFilters';
import { useDebouncedValue } from '@mantine/hooks';

interface MainContentProps {}

const StyledContainerDiv = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  max-width: 960px;
  padding-top: 24px;
`;

const StyledCompaniesFoundParagraph = styled.p`
  color: #909296;
  font-weight: 700;
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

const mockSpecialties = [
  ISpecialty.EXCAVATION,
  ISpecialty.PLUMBING,
  ISpecialty.ELECTRICAL,
  ISpecialty.PAINTING,
];
const mockCities = [ICity.BERLIN, ICity.HAMBURG, ICity.MUNICH, ICity.FRANKFURT, ICity.STUTTGART];
const mockDescriptions = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ita ne hoc quidem modo paria peccata sunt.',
  'Cumoe audissem Antiochum, Brute, ut solebam, cum M. In his igitur partibus duabus nihil erat, quod Zeno.',
  'Commutare gestiret duo Reges: constructio interrete. Quid ait Aristoteles reliquique Platonis alumni.',
  'Quod maxime efficit Theophrasti de beata vita liber, in quo multum admodum fortunae datur luxuriam no.',
];
const mockLogos = [
  'https://picsum.photos/id/320/300',
  'https://picsum.photos/id/321/300',
  'https://picsum.photos/id/322/300',
  'https://picsum.photos/id/323/300',
  'https://picsum.photos/id/324/300',
];

const mockCompanies: ICompany[] = mockCompanyNames.map((item, idx) => ({
  name: item,
  specialties: [mockSpecialties[(idx + 1) % 4], mockSpecialties[(idx + 3) % 4]],
  description: mockDescriptions[idx % 4],
  city: mockCities[idx % 5],
  logo: mockLogos[idx % 5],
}));

const MainContent: FunctionComponent<MainContentProps> = ({}) => {
  const [searchValue, setSearchValue] = useState('');
  const [debouncedSearchValue] = useDebouncedValue(searchValue, 500);
  const [shownCompanies, setShownCompanies] = useState(mockCompanies);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([true, true, true, true]);

  useEffect(() => {
    const filteredCompaniesFromSearch = mockCompanies.filter(item => {
      return item.name.toLowerCase().includes(searchValue.trim().toLowerCase());
    });

    const selectedSpecialtiesValues = Object.values(ISpecialty).filter(
      (item, idx) => selectedCheckboxes[idx],
    );

    const filteredCompanies = filteredCompaniesFromSearch.filter(company => {
      return company.specialties.some(specialty => {
        return selectedSpecialtiesValues.includes(specialty);
      });
    });

    setShownCompanies(filteredCompanies);
  }, [debouncedSearchValue, selectedCheckboxes]);

  return (
    <StyledContainerDiv>
      <SearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        companyNames={searchValue.trim() ? shownCompanies.map(item => item.name) : []}
      />
      <CompaniesFilters
        selectedCheckboxes={selectedCheckboxes}
        setSelectedCheckboxes={setSelectedCheckboxes}
      />
      <StyledCompaniesFoundParagraph>
        {shownCompanies.length} Companies found
      </StyledCompaniesFoundParagraph>
      <CompaniesGrid companies={shownCompanies} />
    </StyledContainerDiv>
  );
};

export default MainContent;
