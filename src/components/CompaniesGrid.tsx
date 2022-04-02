import { FunctionComponent } from 'react';
import CompanyCard, { Company } from './CompanyCard';
import styled from '@emotion/styled';

interface CompaniesGridProps {
  companies: Company[];
}

const StyledContainerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 2%;
  grid-template-rows: max-content;
  grid-row-gap: 4%;
  justify-items: center;
  margin-top: 32px;
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
