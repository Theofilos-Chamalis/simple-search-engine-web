import { FunctionComponent } from 'react';
import { Autocomplete } from '@mantine/core';

interface SearchBarProps {
  companyNames: string[];
  searchValue: string;
  setSearchValue: (val: string) => void;
}

const SearchBar: FunctionComponent<SearchBarProps> = ({
  companyNames,
  searchValue,
  setSearchValue,
}) => {
  return (
    <Autocomplete
      data={companyNames || ['']}
      placeholder={'Search...'}
      size={'lg'}
      label={'FIND A COMPANY'}
      labelProps={{ style: { fontWeight: 800, fontSize: 26 } }}
      value={searchValue}
      onChange={setSearchValue}
      radius={'md'}
      limit={3}
      icon={
        <img src={'/src/assets/magnifying-glass-solid.svg'} alt={'Searchbar icon'} width={24} />
      }
    />
  );
};

export default SearchBar;
