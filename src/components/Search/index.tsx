import {Input, InputGroup, InputLeftElement} from '@chakra-ui/react'
import {SearchIcon} from "@chakra-ui/icons";

export const Search = () => {
    return (
        <>
            <InputGroup>
                <InputLeftElement pointerEvents="none" children={<SearchIcon color="secondary.white"/>} />
                <Input
                    type="text"
                    placeholder="Search.."
                    width="100%"
                    bg="lightGray.920"
                    borderColor="lightGray.720"
                    borderRadius="4px"
                    color="secondary.white"
                    focusBorderColor="lightGray.700"
                    _placeholder={{ color: 'lightGray.720' }}
                />
            </InputGroup>
        </>
    )
};

