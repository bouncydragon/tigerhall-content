import { useQuery } from '@apollo/client';
import { Box, Container, Grid, GridItem, Heading } from '@chakra-ui/react';

import { GET_CONTENT_CARDS } from './graphql/queries/ContentCard';
import { Header, ContentCard } from './components';
import { optimizeImageUri, secondsToMinutes } from './helpers';
import { TEdge } from './types/Content.ts';

import './App.scss';

const App = (): JSX.Element => {
  const { loading, error, data } = useQuery(GET_CONTENT_CARDS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <Box bg='darkGray.700' height='100%'>
      <Header />
      <Container maxW={1280} py={4} px={20}>
        <Heading as='h2' fontSize='2xl' fontWeight={700} color='white' paddingBottom={6}>
          Tigerhall Library
        </Heading>
        <Grid templateColumns='repeat(auto-fit, minmax(15rem, 1fr))' rowGap={12} columnGap={6}>
          {data?.contentCards?.edges.map((content: TEdge) => (
            <GridItem
              key={content.id}
              as='article'
              position='relative'
              minWidth={240}
              maxWidth={260}
              height={248}
              bg='white'
              borderRadius='lg'
              overflow='hidden'
            >
              <ContentCard
                contentImg={optimizeImageUri(content.image.uri)}
                contentName={content.name}
                contentCategory={content.name}
                contentLength={secondsToMinutes(content.length)}
                experts={content.experts}
              />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default App;
