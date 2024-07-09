import {Input, InputGroup, InputLeftElement} from '@chakra-ui/react'

export const Search = () => {
    return (
        <InputGroup>
            <InputLeftElement pointerEvents='none' color='gray.300' fontSize='1.2em'>
                $
            </InputLeftElement>
            <Input type='tel' placeholder='Search...' />
        </InputGroup>
    )
}