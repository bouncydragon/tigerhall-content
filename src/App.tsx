import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import { GET_CONTENT_CARDS } from './graphql/queries/contentCards.ts';
import { Header, ContentCard, ContentCardLoader } from './components';
import { useDebounce } from './hooks';
import { optimizeImageUri, secondsToMinutes } from './helpers';
import { TEdge } from './types/Content.ts';
import {
  IMPROVE_SEARCH,
  NO_RESULTS_FOUND,
  SEARCH_PLACEHOLDER,
  TIGERHALL_LIBRARY,
} from './constants';

import './App.scss';

const App = (): JSX.Element => {
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [searchVal, setSearchVal] = useState<string>('');
  const debouncedSearchTerm = useDebounce<string>(searchVal, 300);

  const { loading, error, fetchMore, data } = useQuery(GET_CONTENT_CARDS, {
    variables: { keywords: debouncedSearchTerm, limit: 10, offset: 0 },
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchVal(e.target.value);
  };

  useEffect(() => {
    const onScroll = (): void => {
      const scrollIsAtBottom =
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight;
      if (scrollIsAtBottom && !loading) {
        handleFetchMore();
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [data, isLoadingMore]);

  const handleFetchMore = (): void => {
    if (!isLoadingMore && data?.contentCards?.edges.length) {
      setIsLoadingMore(true);
      fetchMore({
        variables: { keywords: debouncedSearchTerm, offset: data.contentCards.edges.length },
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

  const renderContentCards = (edges: TEdge[]): JSX.Element => {
    if (edges?.length > 0) {
      return (
        <>
          {edges.map((content: TEdge) => (
            <GridItem
              key={content.slug}
              as='article'
              position='relative'
              minWidth={240}
              maxWidth={{ lg: 260 }}
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
        </>
      );
    }
    return (
      <Flex color='lightGray.720' alignItems='center' flexDirection='column' padding='24'>
        <Heading as='h6'>{NO_RESULTS_FOUND}</Heading>
        <Text as='p'>{IMPROVE_SEARCH}</Text>
      </Flex>
    );
  };

  const renderContent = () => {
    return (
      <Grid templateColumns='repeat(auto-fit, minmax(15rem, 1fr))' rowGap={{base: 6, lg: 12}} columnGap={6}>
        {loading
          ? Array.from({ length: 10 }).map((_, index) => (
              <GridItem
                key={index}
                as='article'
                position='relative'
                minWidth={240}
                maxWidth={{ lg: 260 }}
                height={248}
                bg='white'
                borderRadius='lg'
                overflow='hidden'
              >
                <ContentCardLoader key={index} />
              </GridItem>
            ))
          : renderContentCards(data?.contentCards?.edges)}
      </Grid>
    );
  };

  if (error) return <p>Error : {error.message}</p>;

  return (
    <Box bg='darkGray.700' height='100%'>
      <Header>
        <InputGroup>
          <InputLeftElement pointerEvents='none' children={<SearchIcon color='white' />} />
          <Input
            type='search'
            name='search'
            placeholder={SEARCH_PLACEHOLDER}
            width='100%'
            bg='lightGray.920'
            borderColor='lightGray.720'
            borderRadius={4}
            color='white'
            focusBorderColor='tigerOrange.600'
            _hover={{ borderColor: 'tigerOrange.600' }}
            _placeholder={{ color: 'lightGray.720' }}
            onChange={handleChange}
            value={searchVal}
          />
        </InputGroup>
      </Header>
      <Container maxW={1280} px={{base: 5, sm: 10, md: 20}} pb={5} pt={50}>
        <Heading
          as='h2'
          fontSize='2xl'
          fontWeight={700}
          color='white'
          paddingBottom={{ base: 10, lg: 6}}
          textAlign={{ base: 'center', lg: 'left'}}
        >
          {TIGERHALL_LIBRARY}
        </Heading>
        <Box minH='100vh' width='100%'>
          {renderContent()}
          {isLoadingMore && (
            <Flex justifyContent='center' alignItems='center' mt={20} mb={10}>
              <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='lightGray.600'
                color='tigerOrange.600'
                size='xl'
              />
            </Flex>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default App;
