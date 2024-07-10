import { Box, Progress, Skeleton, SkeletonText, Stack } from '@chakra-ui/react';

export const ContentCardLoader = (): JSX.Element => {
  return (
    <>
      <Box height={104} minHeight={104} bg='lightGray.300' width='100%'>
        <Skeleton height='inherit'></Skeleton>
      </Box>
      <Progress colorScheme='tigerOrange' size='xs' value={0} />
      <Stack direction={['row', 'column']} spacing='1px' bg='white' padding={2}>
        <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Stack>
    </>
  );
};
