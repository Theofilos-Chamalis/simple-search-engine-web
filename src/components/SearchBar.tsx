import { FunctionComponent } from 'react';
import { Autocomplete } from '@mantine/core';

interface SearchBarProps {
  companyNames: string[];
  searchValue: string;
  setSearchValue: (val: string) => void;
}

/**
 * The searchbar component for filtering out a company based on
 * its name. This component also has an autocomplete functionality
 * which suggests a company name (max 3) after you have started typing.
 *
 * @param {string[]} companyNames
 * @param {string} searchValue
 * @param {(val: string) => void} setSearchValue
 * @returns {JSX.Element}
 * @constructor
 */
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
