import { FunctionComponent } from 'react';
import CompanyCard, { ICompany } from './CompanyCard';
import styled from '@emotion/styled';

interface CompaniesGridProps {
  companies: ICompany[];
}

const StyledContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 3%;
  justify-items: center;
  padding-bottom: 120px;
`;

const CompaniesGrid: FunctionComponent<CompaniesGridProps> = ({ companies }) => {
  return (
    <StyledContainerGrid>
      {companies.map(item => (
        <CompanyCard key={item.name} company={item} />
      ))}
    </StyledContainerGrid>
  );
};

export default CompaniesGrid;
