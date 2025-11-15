import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  VStack,
  Textarea,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Header from './Header';

const Transaction = () => {
  const [id, setId] = useState('');
  const [entryType, setEntryType] = useState('');
  const [date, setDate] = useState(new Date());
  const [quantity, setQuantity] = useState('');
  const [remark, setRemark] = useState('');

  const handleSubmit = () => {
    // Handle submission logic here
    console.log('Submitted:', { id, entryType, date, quantity, remark });
  };

  return (
    <ChakraProvider>
      <Header />
      <VStack spacing={4} align="center" justify="center" height="100vh" paddingTop="30px">
        <h1 style={{ fontSize: '3rem', color: 'teal', marginBottom: '-20px' }}>Transaction</h1>
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
                <FormLabel>Entry Type</FormLabel>
                <Select
                  placeholder="Select entry type"
                  value={entryType}
                  onChange={(e) => setEntryType(e.target.value)}
                >
                  <option value="receive">Receive</option>
                  <option value="issue">Issue</option>
                </Select>
              </FormControl>
            </GridItem>

            <GridItem>
              <FormControl mt="4">
                <FormLabel mt="4">Date</FormLabel>
                <DatePicker
                  selected={date}
                  onChange={(date) => setDate(date)}
                  borderColor={'gray'}
                />
              </FormControl>
            </GridItem>

            <GridItem>
              <FormControl mt="4">
                <FormLabel>Quantity</FormLabel>
                <Input
                  type="number"
                  min="0"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </FormControl>
            </GridItem>

            <GridItem colSpan={2}>
              <FormControl mt="4">
                <FormLabel>Remark</FormLabel>
                <Textarea
                  value={remark}
                  onChange={(e) => setRemark(e.target.value)}
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
    </ChakraProvider>
  );
};

export default Transaction;
