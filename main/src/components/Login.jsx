import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  Image,
  Center,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

// Import the Tata Steel logo
import TataSteelLogo from './Tata_Steel_Logo.svg.png';
import TataSteelLogo2 from './pngwing.com.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Add logic to authenticate user (e.g., make a request to your backend)
    // For simplicity, let's assume successful login for any email/password
    // In a real-world scenario, you should validate credentials on the server

    // For now, let's just navigate to the home page after "logging in"
    navigate('/');
  };

  return (
    <ChakraProvider>
      <Center>
        <Image
          src={TataSteelLogo2}
          alt="Tata Steel Logo"
          marginTop={55}
          width="180px"
          height="auto"
          />
      </Center>
      <Center>
        <Image
          src={TataSteelLogo}
          alt="Tata Steel Logo"
        //   marginTop={1}
          width="350px"
          height="auto"
          />
      </Center>
      <Box
        maxW="md"
        borderWidth="1px"
        borderRadius="lg"
        borderColor={'grey'}
        overflow="hidden"
        p={5}
        m="auto"
        mt={8}
        position="relative"
      >
        {/* Centered Logo */}

        {/* Login Form */}
        <Stack spacing={4} mt={4}>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" borderColor={'grey'} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" borderColor={'grey'} />
          </FormControl>

          {/* Login Button */}
          <Button colorScheme="facebook" onClick={handleLogin}>
            Login
          </Button>
        </Stack>
      </Box>
    </ChakraProvider>
  );
};

export default Login;
