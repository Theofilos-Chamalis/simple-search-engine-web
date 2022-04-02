import { FunctionComponent } from 'react';
import { Badge, Button, Card, useMantineTheme } from '@mantine/core';
import styled from '@emotion/styled';

export interface Company {
  name: string;
  specialties: string[];
  city: string;
  description: string;
  logo: string;
}

interface CompanyCardProps {
  company: Company;
}

interface StyledDividerProps {
  color: string;
}

const StyledDivider = styled.div<StyledDividerProps>`
  width: 100%;
  height: 1px;
  background-color: ${props => props.color};
  margin-bottom: 12px;
`;

const StyledSpecialtiesContainerDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const StyledCityContainerDiv = styled.div`
  display: flex;
  align-items: center;
`;

const CompanyCard: FunctionComponent<CompanyCardProps> = ({ company }) => {
  const theme = useMantineTheme();

  return (
    <div>
      <Card shadow="md" p="md" withBorder={true} radius={'md'}>
        <Card.Section>
          <img src={company.logo} height={160} width={'100%'} alt="Image" />
        </Card.Section>

        <h3>{company.name}</h3>

        <StyledDivider color={theme.colors.gray[3]} />
        <StyledSpecialtiesContainerDiv>
          <img src={'/src/assets/worker-128.png'} alt={'Specialties icon'} height={20} />
          {company.specialties.map(specialty => (
            <Badge
              key={company.name + specialty}
              color="pink"
              variant="light"
              size={'lg'}
              style={{ marginLeft: 6 }}>
              {specialty}
            </Badge>
          ))}
        </StyledSpecialtiesContainerDiv>

        <StyledCityContainerDiv>
          <img src={'/src/assets/gps-128.png'} alt={'City icon'} height={20} />
          <Badge color="teal" variant="light" size={'lg'} style={{ marginLeft: 6 }}>
            {company.city}
          </Badge>
        </StyledCityContainerDiv>

        <p>{company.description}</p>

        <Button
          variant="light"
          color="violet"
          fullWidth
          style={{ marginTop: 14 }}
          onClick={() => alert(`You have contacted ${company.name}!`)}>
          Contact Now
        </Button>
      </Card>
    </div>
  );
};

export default CompanyCard;
