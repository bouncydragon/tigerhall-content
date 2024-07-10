import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { Box, Container, Grid, GridItem, Heading } from '@chakra-ui/react';

import { GET_CONTENT_CARDS } from './graphql/queries/ContentCard';
import { Header, ContentCard } from './components';
import { optimizeImageUri, secondsToMinutes } from './helpers';
import { TEdge } from './types/Content.ts';
import { TIGERHALL_LIBRARY } from './constants';

import './App.scss';

const App = (): JSX.Element => {
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const { loading, error, fetchMore, data } = useQuery(GET_CONTENT_CARDS, {
    variables: { limit: 10, offset: 0 },
  });

  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        handleFetchMore();
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [data, isLoadingMore]);

  const handleFetchMore = () => {
    if (!isLoadingMore) {
      fetchMore({
        variables: { offset: data?.contentCards?.edges.length },
        updateQuery: (prevResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prevResult;
          return {
            contentCards: {
              ...prevResult.contentCards,
              edges: [...prevResult.contentCards.edges, ...fetchMoreResult.contentCards.edges],
            },
          };
        },
      }).finally(() => setIsLoadingMore(false));
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <Box bg='darkGray.700' height='100%'>
      <Header />
      <Container maxW={1280} py={4} px={20}>
        <Heading as='h2' fontSize='2xl' fontWeight={700} color='white' paddingBottom={6}>
          {TIGERHALL_LIBRARY}
        </Heading>
        <Grid templateColumns='repeat(auto-fit, minmax(15rem, 1fr))' rowGap={12} columnGap={6}>
          {data?.contentCards?.edges.map((content: TEdge) => (
            <GridItem
              key={Math.random()}
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
                users={content.experts || content.participants}
              />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default App;
