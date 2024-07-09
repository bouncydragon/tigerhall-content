import { Box, Container, Flex, Image, Text } from '@chakra-ui/react';
import { Search } from '../Search';
import TigerhallLogo from '../../assets/tiegrhall-logo.svg';

export const Header = () => {
  return (
    <Box bg='darkGray.900'>
      <Container maxW={1280}>
        <Flex as='header' bg='inherit' px={0.75} py={2.5}>
          <Flex align='center'>
            <Image src={TigerhallLogo} alt='tigerhall' />
            <Text
              fontSize='xs'
              fontWeight='black'
              ml={1.5}
              mt={1}
              letterSpacing={2}
              color='tigerOrange.600'
            >
              TIGERHALL
            </Text>
          </Flex>
          <Box m='auto' w='50%'>
            <Search />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
