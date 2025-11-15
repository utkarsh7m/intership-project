// Loader.jsx
import React from 'react';
import { Box, Spinner } from '@chakra-ui/react';

const Loader = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100%"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="teal.500"
        size="xl"
        sx={{
          animation: 'rotate 1s linear infinite', // Custom rotation animation
          '@keyframes rotate': {
            from: { transform: 'rotate(0deg)' },
            to: { transform: 'rotate(360deg)' },
          },
        }}
      />
    </Box>
  );
};

export default Loader;
