import { Box, Flex, Image, Text, Icon, Stack, Link, Button } from '@chakra-ui/react';
import { LuClock3, LuShare2, LuBookmark } from 'react-icons/lu';
import { RiProgress3Line } from 'react-icons/ri';
import { MdHeadset } from 'react-icons/md';
import './content-card.scss';

export const ContentCard = () => {
  return (
    <Flex
      as='article'
      flexDirection='column'
      bg='white'
      minWidth={244}
      maxWidth={260}
      borderRadius='lg'
      overflow='hidden'
      position='relative'
    >
      <Box height={104} minHeight={104} overflow='hidden' bg='lightGray.300'>
        <Stack
          borderTopLeftRadius='lg'
          borderBottomRightRadius='lg'
          position='absolute'
          bg='white'
          border='none'
          py={1.5}
          px={2.5}
          direction={['column', 'row']}
          spacing={1}
          alignItems='center'
        >
          <Icon as={RiProgress3Line} color='tigerOrange.600' fontSize='sm' width='fit-content' />
          <Text fontSize='xs' color='darkGray.720' fontWeight={700}>
            30% Completed
          </Text>
        </Stack>
        <Image
          src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
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
          direction={['column', 'row']}
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
            20m
          </Text>
        </Stack>
      </Box>
      <Box p='2' bg='white'>
        <Text
          as='h3'
          fontSize='2xs'
          color='lightGray.720'
          fontWeight='medium'
          textTransform='uppercase'
        >
          Communicating as a Leader
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
          <Link href='#'>Peak Performance: Going From Good to Great with Simon Taudel</Link>
        </Text>
        <Flex flexDirection='column' paddingTop='0.5rem' paddingBottom='0.5rem'>
          <Text
            as='span'
            fontSize='xs'
            fontWeight='medium'
            color='lightGray.800'
            textOverflow='ellipsis'
          >
            Jane Doe
          </Text>
          <Text
            as='span'
            fontSize='xs'
            fontWeight='bold'
            color='lightGray.720'
            textOverflow='ellipsis'
          >
            Subway APAC
          </Text>
        </Flex>
        <Flex role='group' justify='flex-end' className='button_group'>
          <Button>
            <Icon as={LuShare2} color='tigerOrange.600' fontSize='lg' width='fit-content' />
          </Button>
          <Button>
            <Icon as={LuBookmark} color='tigerOrange.600' fontSize='lg' width='fit-content' />
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};
