import { ReactNode } from 'react';
import { Box, Container, Flex, Image, Text } from '@chakra-ui/react';
import { TIGERHALL_TEXT } from '../../constants';
import TigerhallLogo from '../../assets/tiegrhall-logo.svg';

type HeaderProps = { children: ReactNode };

export const Header = ({ children }: HeaderProps) => {
  return (
    <Box bg='darkGray.900'>
      <Container maxW={1280}>
        <Flex as='header' bg='inherit' px={0.75} py={2.5}>
          <Flex align='center'>
            <Image src={TigerhallLogo} alt='tigerhall-logo' />
            <Text
              fontSize='xs'
              fontWeight='black'
              ml={1.5}
              mt={1}
              letterSpacing={2}
              color='tigerOrange.600'
              display={{ base: 'none', lg: 'block' }}
            >
              {TIGERHALL_TEXT}
            </Text>
          </Flex>
          <Box m='auto' width={{ md: '50%' }}>
            {children}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
