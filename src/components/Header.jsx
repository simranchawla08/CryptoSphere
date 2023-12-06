import React from 'react'
import {Button, HStack} from '@chakra-ui/react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <HStack p={"3"} shadow={"base"} bgColor={"black"}>
      <Button mx={'2'} variant={"unstyled"} color={'gray.100'}>
        <Link to="/">Home</Link>
      </Button>
      <Button mx={'2'} variant={"unstyled"} color={'gray.100'}>
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button mx={'2'} variant={"unstyled"} color={'gray.100'}>
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  )
}

export default Header