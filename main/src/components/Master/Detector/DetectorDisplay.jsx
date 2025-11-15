import React, { useState, useEffect } from 'react';
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
import Header from '../../Header';
import axios from 'axios';
import { addMonths, format } from 'date-fns';

const MasterReport = () => {
  const [masterData, setMasterData] = useState([]);
  const [nextDates, setNextDates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/pdmReport');
        const data = response.data.map((row) => {
          const nextDate = addMonths(new Date(row.dueDate), 6);
          return { ...row, nextDate };
        });
        setMasterData(data);
        setNextDates(data.map((row) => row.nextDate));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ChakraProvider>
      <Header />
      <VStack spacing={4} align="center" justify="center" height="100vh" paddingTop="30px">
        <h1 style={{ fontSize: '3rem', color: 'teal', marginBottom: '' }}>Portable Detector Master Report</h1>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Serial No.</Th>
              <Th>Organization Unit</Th>
              <Th>Section</Th>
              <Th>Make</Th>
              <Th>Type</Th>
              <Th>Location</Th>
              <Th>AssignPerson</Th>
              <Th>Due Date</Th>
              <Th>Next Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            {masterData.map((row, index) => (
              <Tr key={row.id}>
                <Td>{row.id}</Td>
                <Td>{row.orgUnit}</Td>
                <Td>{row.section}</Td>
                <Td>{row.make}</Td>
                <Td>{row.model}</Td>
                <Td>{row.location}</Td>
                <Td>{row.assignPerson}</Td>
                <Td>{format(new Date(row.dueDate), 'dd-MM-yyyy')}</Td>
                <Td>{format(new Date(nextDates[index]), 'dd-MM-yyyy')}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </VStack>
    </ChakraProvider>
  );
};

export default MasterReport;
