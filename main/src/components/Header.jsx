import {
    ChakraProvider,
    Box,
    Button,
    VStack,
    Image,
    Center,
  } from '@chakra-ui/react';

  import TataSteelLogo from './Tata_Steel_Logo.svg.png';
  import TataSteelLogo2 from './pngwing.com.png';
import { Link } from 'react-router-dom';
  import React from 'react'
  
  const Header = () => {
    return (
      <><Image
      src={TataSteelLogo2}
      alt="Tata Steel Logo"
      position="absolute"
      top="4"
      left="25px"
      width="70px"
      height="auto"
    />
<Image
      src={TataSteelLogo}
      alt="Tata Steel Logo"
      position="absolute"
      top="8"
      left="130px"
      width="250px"
      height="auto"
    />
          <Button
        position="absolute"
        top="3"
        right="270px"
        mt={4}
        ml={4}
        colorScheme="blue"
        size="sm"
        width="110px"
        height="40px"
      >
        <Link to={'/'}>Home</Link>
      </Button>

      <Button
        position="absolute"
        top="3"
        right="100px"
        mt={4}
        ml={4}
        colorScheme="red"
        size="sm"
        width="110px"
        height="40px"
      >
        <Link to={'/login'}>Logout</Link>
      </Button>
    </>
    )
  }
  
  export default Header