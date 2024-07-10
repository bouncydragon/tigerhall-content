import { Fragment } from 'react';
import {
  Box,
  Flex,
  Image,
  Text,
  Icon,
  Stack,
  Link,
  Button,
  ButtonGroup,
  Progress,
} from '@chakra-ui/react';
import { LuClock3, LuShare2, LuBookmark } from 'react-icons/lu';
import { RiProgress3Line } from 'react-icons/ri';
import { MdHeadset } from 'react-icons/md';

import { TUser } from '../../types/Content.ts';

import './content-card.scss';
import { COMPLETED_TEXT, MINUTES_LETTER } from '../../constants';

type TContentCard = {
  contentImg: string;
  contentLength: number;
  contentCategory: string;
  contentName: string;
  users: TUser[] | undefined;
};

export const ContentCard = (props: Readonly<TContentCard>): JSX.Element => {
  const { contentImg, contentLength, contentCategory, contentName, users } = props;
  return (
    <>
      <Box height={104} minHeight={104} bg='lightGray.300' width='100%'>
        <Stack
          borderTopLeftRadius='lg'
          borderBottomRightRadius='lg'
          position='absolute'
          bg='white'
          border='none'
          py={1.5}
          px={2.5}
          direction='row'
          spacing={1}
          alignItems='center'
        >
          <Icon as={RiProgress3Line} color='tigerOrange.600' fontSize='sm' width='fit-content' />
          <Text fontSize='xs' color='darkGray.720' fontWeight={700}>
            {COMPLETED_TEXT}
          </Text>
        </Stack>
        <Image
          src={contentImg}
          alt='Communicating as a Leader'
          height='100%'
          width='100%'
          objectFit='cover'
          opacity={1}
        />
        <Flex
          bg='tigerOrange.600'
          justifyContent='center'
          alignItems='center'
          borderRadius='full'
          position='absolute'
          top={76}
          left={2.5}
          px={1}
          py={1}
        >
          <Icon as={MdHeadset} color='white' fontSize='sm' width='fit-content' />
        </Flex>
        <Stack
          direction='row'
          spacing={1}
          bg='rgba(21, 22, 23, 0.7)'
          fontSize='xs'
          borderRadius='full'
          alignItems='center'
          position='absolute'
          top={73}
          right={2.5}
          py={1}
          px={1.5}
        >
          <Icon as={LuClock3} color='white' fontSize='sm' width='fit-content' />
          <Text fontSize='xs' color='white' fontWeight={700}>
            {contentLength}
            {MINUTES_LETTER}
          </Text>
        </Stack>
      </Box>
      <Progress colorScheme='tigerOrange' size='xs' value={contentLength} />
      <Stack direction='column' spacing='1px' bg='white' padding={2}>
        <Text
          as='h3'
          fontSize='2xs'
          color='lightGray.720'
          fontWeight='medium'
          textTransform='uppercase'
          overflow="hidden"
        >
          {contentCategory}
        </Text>
        <Text
          as='h2'
          fontSize='md'
          fontWeight='bold'
          paddingTop='0.125rem'
          textOverflow='ellipsis'
          color='black'
          textAlign='left'
        >
          <Link href='#'>{contentName}</Link>
        </Text>
        <Flex flexDirection='column' paddingTop='0.5rem'>
          <Text
            as='span'
            fontSize='xs'
            fontWeight='medium'
            color='lightGray.800'
            textOverflow='ellipsis'
            overflow="hidden"
            isTruncated
          >
            {users?.map(
              (user: TUser, index: number): JSX.Element => (
                <Fragment key={index}>
                  {`${user.firstName} ${user.lastName}${index < users.length - 1 ? ', ' : ''}`}
                </Fragment>
              )
            )}
          </Text>
          <Text
            as='span'
            fontSize='xs'
            fontWeight='bold'
            color='lightGray.720'
            textOverflow='ellipsis'
            overflow="hidden"
            isTruncated
          >
            {users?.map(
              (user: TUser, index: number): JSX.Element => (
                <Fragment key={index}>
                  {`${user.company}${index < users.length - 1 && user.company !== '' ? ', ' : ''}`}
                </Fragment>
              )
            )}
          </Text>
        </Flex>
        <ButtonGroup justifyContent='end' position='absolute' bottom={1} right={1}>
          <Button aria-label='Share'>
            <Icon as={LuShare2} color='tigerOrange.600' fontSize='lg' width='fit-content' />
          </Button>
          <Button aria-label='Bookmark'>
            <Icon as={LuBookmark} color='tigerOrange.600' fontSize='lg' width='fit-content' />
          </Button>
        </ButtonGroup>
      </Stack>
    </>
  );
};
