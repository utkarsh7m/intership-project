import React from 'react';
import {
  ChakraProvider,
  VStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';
import Header from './Header';

const TransactionReport = () => {
  const transactionData = [
    { id: 1, product: 'Laptop', make: 'Dell', model: 'XPS', description: 'High-performance notebook' },
    { id: 2, product: 'Phone', make: 'Samsung', model: 'Galaxy', description: 'Android smartphone' },
    { id: 3, product: 'Camera', make: 'Canon', model: 'EOS', description: 'DSLR camera for professionals' },
    { id: 4, product: 'Watch', make: 'Apple', model: 'Watch', description: 'Smartwatch with health features' },
    { id: 5, product: 'Headphones', make: 'Sony', model: 'WH-1000XM4', description: 'Noise-canceling headphones' },
  ];

  return (
    <ChakraProvider>
      <Header />
      <VStack spacing={4} align="center" justify="center" height="100vh" paddingTop="30px">
        <h1 style={{ fontSize: '3rem', color: 'teal', marginBottom: '' }}>Transaction Report</h1>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Product</Th>
              <Th>Make</Th>
              <Th>Model</Th>
              <Th>Description</Th>
            </Tr>
          </Thead>
          <Tbody>
            {transactionData.map((row) => (
              <Tr key={row.id}>
                <Td>{row.id}</Td>
                <Td>{row.product}</Td>
                <Td>{row.make}</Td>
                <Td>{row.model}</Td>
                <Td>{row.description}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </VStack>
    </ChakraProvider>
  );
};

export default TransactionReport;
