import { Box, Progress, Skeleton, Stack } from '@chakra-ui/react';

export const ContentCardLoader = (): JSX.Element => {
  return (
    <>
      <Box height={104} minHeight={104} bg='lightGray.300' width='100%'>
        <Skeleton height='inherit'></Skeleton>
      </Box>
      <Progress colorScheme='tigerOrange' size='xs' value={0} />
      <Stack direction={['row', 'column']} spacing={2.5} bg='white' padding={2}>
        <Skeleton height={3} width={65} />
        <Skeleton height={3} width={79} />
        <Skeleton height={3} width={50} />
        <Skeleton height={3} width={40} />
      </Stack>
    </>
  );
};
