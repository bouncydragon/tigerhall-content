import {Box, Flex, Image, Text} from "@chakra-ui/react";
import {Search} from "../Search";
import TigerhallLogo from '../../assets/tiegrhall-logo.svg';

export const Header = () => {
    return (
        <Flex as="header" bg="darkGray.900" padding="0.75rem 1.5rem 0.75rem 1.5rem">
            <Flex align="center">
                <Image src={TigerhallLogo} alt="tigerhall" />
                <Text fontSize="2xs" fontWeight="black" ml="1.5" mt="1" letterSpacing="0.1rem" color="primary">TIGERHALL</Text>
            </Flex>
                <Box m="auto" w="50%">
                    <Search />
                </Box>
        </Flex>

    )
}