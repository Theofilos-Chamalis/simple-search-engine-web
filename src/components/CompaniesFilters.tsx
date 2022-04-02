import { FunctionComponent } from 'react';
import { Checkbox, CheckboxGroup } from '@mantine/core';
import styled from '@emotion/styled';
import { ISpecialty } from './CompanyCard';

interface CompaniesFiltersProps {
  selectedCheckboxes: boolean[];
  setSelectedCheckboxes: (val: (prevState: boolean[]) => boolean[]) => void;
}

const StyledCheckboxContainerDiv = styled.div`
  margin-top: 12px;
  margin-bottom: 20px;
`;

const CompaniesFilters: FunctionComponent<CompaniesFiltersProps> = ({
  selectedCheckboxes,
  setSelectedCheckboxes,
}) => {
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
        <Checkbox
          value={ISpecialty.ELECTRICAL}
          checked={selectedCheckboxes[0]}
          label={ISpecialty.ELECTRICAL}
          onClick={() => {
            setSelectedCheckboxes((prevState: boolean[]) => [
              !prevState[0],
              prevState[1],
              prevState[2],
              prevState[3],
            ]);
          }}
        />
        <Checkbox
          value={ISpecialty.EXCAVATION}
          checked={selectedCheckboxes[1]}
          label={ISpecialty.EXCAVATION}
          onClick={() =>
            setSelectedCheckboxes((prevState: boolean[]) => [
              prevState[0],
              !prevState[1],
              prevState[2],
              prevState[3],
            ])
          }
        />
        <Checkbox
          value={ISpecialty.PAINTING}
          checked={selectedCheckboxes[2]}
          label={ISpecialty.PAINTING}
          onClick={() =>
            setSelectedCheckboxes((prevState: boolean[]) => [
              prevState[0],
              prevState[1],
              !prevState[2],
              prevState[3],
            ])
          }
        />
        <Checkbox
          value={ISpecialty.PLUMBING}
          checked={selectedCheckboxes[3]}
          label={ISpecialty.PLUMBING}
          onClick={() =>
            setSelectedCheckboxes((prevState: boolean[]) => [
              prevState[0],
              prevState[1],
              prevState[2],
              !prevState[3],
            ])
          }
        />
      </CheckboxGroup>
    </StyledCheckboxContainerDiv>
  );
};

export default CompaniesFilters;
