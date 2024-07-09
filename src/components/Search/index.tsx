import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

export const Search = () => {
  return (
    <>
      <InputGroup>
        <InputLeftElement pointerEvents='none' children={<SearchIcon color='white' />} />
        <Input
          type='text'
          placeholder='Search..'
          width='100%'
          bg='lightGray.920'
          borderColor='lightGray.720'
          borderRadius={4}
          color='white'
          focusBorderColor='tigerOrange.600'
          _hover={{ borderColor: 'tigerOrange.600' }}
          _placeholder={{ color: 'lightGray.720' }}
        />
      </InputGroup>
    </>
  );
};
