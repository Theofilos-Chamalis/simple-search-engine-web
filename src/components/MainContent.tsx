import React, { FunctionComponent, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import SearchBar from './SearchBar';
import CompaniesGrid from './CompaniesGrid';
import CompaniesFilters from './CompaniesFilters';
import { useDebouncedValue } from '@mantine/hooks';
import { CompanyDTO, ISpecialty } from '../services/companies/companies.dto';
import { getCompaniesService } from '../services';

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

const MainContent: FunctionComponent<MainContentProps> = ({}) => {
  const [companies, setCompanies] = useState<CompanyDTO[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [debouncedSearchValue] = useDebouncedValue(searchValue, 500);
  const [shownCompanies, setShownCompanies] = useState(companies);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([true, true, true, true]);

  useEffect(() => {
    getCompaniesService()
      .then(res => {
        if (!res || !res?.ok || !res?.data) return;

        const companiesArray = res.data;

        setCompanies(companiesArray);
        setShownCompanies(companiesArray);
      })
      .catch(err => {
        setCompanies([]);
        setShownCompanies([]);
        return;
      });
  }, []);

  useEffect(() => {
    if (!companies) return;

    const filteredCompaniesFromSearch = companies.filter(item => {
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
      {shownCompanies.length > 0 && <CompaniesGrid companies={shownCompanies} />}
    </StyledContainerDiv>
  );
};

export default MainContent;
