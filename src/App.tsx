import { useQuery } from '@apollo/client';
import { Box, Container, Grid, GridItem, Heading } from '@chakra-ui/react';
import { Header, ContentCard } from './components';
import './App.scss';
import { GET_CONTENT_CARDS } from './graphql/queries/ContentCard.ts';
import { secondsToMinutes } from './utils/secondsToMinutes.ts';
import { TEdge } from './types/Content.ts';

const App = (): JSX.Element => {
  const { loading, error, data } = useQuery(GET_CONTENT_CARDS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log();

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
                id={content.id}
                contentImg={content.image.uri}
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
