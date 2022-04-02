import { FunctionComponent } from 'react';

export interface Company {
  name: string;
  specialties: string[];
  city: string;
}

interface CompanyCardProps {
  company: Company;
}

const CompanyCard: FunctionComponent<CompanyCardProps> = ({ company }) => {
  return (
    <div style={{ border: '1px solid black', borderRadius: 8, padding: 8 }}>
      <p>{company.name}</p>
      {company.specialties.map((item, idx) => (
        <p key={company.name + idx}>{item}</p>
      ))}
      <p>{company.city}</p>
    </div>
  );
};

export default CompanyCard;
