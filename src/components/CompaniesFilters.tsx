import { FunctionComponent } from 'react';
import { Checkbox, CheckboxGroup } from '@mantine/core';
import styled from '@emotion/styled';
import { ISpecialty } from './CompanyCard';

interface CompaniesFiltersProps {}

const StyledCheckboxContainerDiv = styled.div`
  margin-top: 12px;
  margin-bottom: 20px;
`;

const CompaniesFilters: FunctionComponent<CompaniesFiltersProps> = ({}) => {
  return (
    <StyledCheckboxContainerDiv>
      <CheckboxGroup
        defaultValue={[
          ISpecialty.ELECTRICAL,
          ISpecialty.EXCAVATION,
          ISpecialty.PAINTING,
          ISpecialty.PLUMBING,
        ]}
        color="violet"
        label="SPECIALITY"
        labelProps={{ style: { fontWeight: 800 } }}
        spacing="sm"
        style={{ fontWeight: 600 }}>
        <Checkbox value={ISpecialty.ELECTRICAL} label={ISpecialty.ELECTRICAL} />
        <Checkbox value={ISpecialty.EXCAVATION} label={ISpecialty.EXCAVATION} />
        <Checkbox value={ISpecialty.PAINTING} label={ISpecialty.PAINTING} />
        <Checkbox value={ISpecialty.PLUMBING} label={ISpecialty.PLUMBING} />
      </CheckboxGroup>
    </StyledCheckboxContainerDiv>
  );
};

export default CompaniesFilters;
