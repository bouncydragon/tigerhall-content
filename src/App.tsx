import { Header, ContentCard } from './components';
import { Box, Container, Heading } from '@chakra-ui/react';
import './App.scss';

function App() {
  return (
    <Box bg='darkGray.700' height='100vh'>
      <Header />
      <Container maxW={1280} py={4} px={20}>
        <Heading as='h2' fontSize='2xl' fontWeight={700} color='white' paddingBottom={6}>
          Tigerhall Library
        </Heading>
        <ContentCard />
      </Container>
    </Box>
  );
}

export default App;
