import { FunctionComponent } from 'react';
import { Autocomplete } from '@mantine/core';

interface SearchBarProps {
  companyNames: string[];
}

const SearchBar: FunctionComponent<SearchBarProps> = ({ companyNames }) => {
  return (
    <Autocomplete
      data={companyNames}
      placeholder={'Search company...'}
      size={'lg'}
      radius={'md'}
      limit={3}
      icon={
        <img src={'/src/assets/magnifying-glass-solid.svg'} alt={'Searchbar icon'} width={24} />
      }
    />
  );
};

export default SearchBar;
