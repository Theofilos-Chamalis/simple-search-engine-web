import { FunctionComponent } from 'react';
import CompanyCard from './CompanyCard';
import styled from '@emotion/styled';
import { CompanyDTO } from '../services/companies/companies.dto';

interface CompaniesGridProps {
  companies: CompanyDTO[];
}

const StyledContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  column-gap: 3%;
  row-gap: 2%;
  justify-items: center;
  padding-bottom: 160px;
`;

/**
 * The component that renders a grid of CompanyCard components based on
 * the companies that are retrieved from the BE.
 *
 * @param {CompanyDTO[]} companies
 * @returns {JSX.Element}
 * @constructor
 */
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
