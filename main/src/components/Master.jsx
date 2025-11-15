// import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import Header from './Header';
import React, { useState, useEffect } from 'react';
import Loader from './Loader';
const Master = () => {
  const [id, setId] = useState('');
  const [product, setProduct] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    // Handle submission logic here
    console.log('Submitted:', { id, product, make, model, description });
  };
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data)
    const fetchData = async () => {
      // Simulate a delay (you would replace this with your actual async code)
      await new Promise(resolve => setTimeout(resolve, 250));

      // Update loading state
      setIsLoading(false);
    };

    fetchData();
  }, []);
  return (
    <ChakraProvider>
       {isLoading ? (
        <Loader />
      ) : (
        <>
      <Header />
      <VStack spacing={4} align="center" justify="center" height="100vh" paddingTop="30px">
        <h1 style={{ fontSize: '3rem', color: 'teal', marginBottom: '-20px' }}>Master</h1>
        <Box
          borderWidth="2px"
          p="4"
          borderRadius="lg"
          width="80%"
          maxWidth="400px"
        >
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel>ID</FormLabel>
                <Input
                  type="text"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
              </FormControl>
            </GridItem>

            <GridItem>
              <FormControl mt="4">
                <FormLabel>Product</FormLabel>
                <Input
                  type="text"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                />
              </FormControl>
            </GridItem>

            <GridItem>
              <FormControl mt="4">
                <FormLabel>Make</FormLabel>
                <Input
                  type="text"
                  value={make}
                  onChange={(e) => setMake(e.target.value)}
                />
              </FormControl>
            </GridItem>

            <GridItem>
              <FormControl mt="4">
                <FormLabel>Model</FormLabel>
                <Input
                  type="text"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                />
              </FormControl>
            </GridItem>

            <GridItem colSpan={2}>
              <FormControl mt="4">
                <FormLabel>Description</FormLabel>
                <Input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </FormControl>
            </GridItem>
          </Grid>

          <Button
            mt="4"
            colorScheme="teal"
            onClick={handleSubmit}
            width="110px"
            height="40px"
            position="relative"
            left="50%"
            transform="translateX(-50%)"
          >
            Submit
          </Button>
        </Box>
      </VStack>
      </>
      )}
    </ChakraProvider>
  );
};

export default Master;
