import { ReactNode } from 'react';
import { Box, Container, Flex, Image, Link, Text } from '@chakra-ui/react';
import { TIGERHALL_TEXT } from '../../constants';
import TigerhallLogo from '../../assets/tigerhall-logo.svg';

type HeaderProps = { children: ReactNode };

export const Header = ({ children }: HeaderProps) => {
  return (
    <Box bg='darkGray.900'>
      <Container maxW={1280}>
        <Flex as='header' bg='inherit' px={0.75} py={2.5}>
          <Link href='/' display='flex ' alignItems='center'>
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
          </Link>
          <Box m='auto' width={{ md: '50%' }}>
            {children}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
