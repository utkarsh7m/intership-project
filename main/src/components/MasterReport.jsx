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

const MasterReport = () => {
  const masterData = [
    { id: '001', entryType: 'Receive', date: '2023-01-15', quantity: '100', remark: 'Initial stock' },
    { id: '002', entryType: 'Issue', date: '2023-02-02', quantity: '30', remark: 'Production usage' },
    { id: '003', entryType: 'Receive', date: '2023-03-10', quantity: '50', remark: 'Supplier delivery' },
    { id: '004', entryType: 'Issue', date: '2023-04-05', quantity: '20', remark: 'Customer order' },
    { id: '005', entryType: 'Receive', date: '2023-05-20', quantity: '75', remark: 'Additional purchase' },
  ];

  return (
    <ChakraProvider>
      <Header />
      <VStack spacing={4} align="center" justify="center" height="100vh" paddingTop="30px">
        <h1 style={{ fontSize: '3rem', color: 'teal', marginBottom: '' }}>Master Report</h1>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Entry Type</Th>
              <Th>Date</Th>
              <Th>Quantity</Th>
              <Th>Remark</Th>
            </Tr>
          </Thead>
          <Tbody>
            {masterData.map((row) => (
              <Tr key={row.id}>
                <Td>{row.id}</Td>
                <Td>{row.entryType}</Td>
                <Td>{row.date}</Td>
                <Td>{row.quantity}</Td>
                <Td>{row.remark}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </VStack>
    </ChakraProvider>
  );
};

export default MasterReport;
