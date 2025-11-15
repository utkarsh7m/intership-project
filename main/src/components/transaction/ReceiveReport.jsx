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
import Header from '../Header';
import axios from 'axios';
import { addMonths, format } from 'date-fns';

const MasterReport = () => {
  const [masterData, setMasterData] = useState([]);
  const [nextDates, setNextDates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/receiveReport');
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
        <h1 style={{ fontSize: '3rem', color: 'teal', marginBottom: '' }}>Receive Report</h1>
        <Table variant="striped" colorScheme="teal">
          <Thead>
          <Tr>
              {/* <Th>MARK</Th> */}
              <Th>SERIAL NO.</Th>
              <Th>REC DATE</Th>
              <Th>REC PERSON</Th>
              <Th>CAL DATE</Th>
              <Th>SECTION</Th>
              <Th>MAKE</Th>
              <Th>TYPE</Th>
              <Th>ORG UNIT</Th>
            </Tr>
          </Thead>
          <Tbody>
            {masterData.map((row, index) => (
              <Tr key={row.id}>
                <Td>{row.id}</Td>
                {/* <Td>{row.recDate}</Td> */}
                <Td>{row.recDate !== '01-01-1970' ? format(new Date(row.recDate), 'dd-MM-yyyy') : 'NA'}</Td>                <Td>{row.person}</Td>
                <Td>{format(new Date(row.dueDate), 'dd-MM-yyyy')}</Td>
                <Td>{row.section}</Td>
                <Td>{row.make}</Td>
                <Td>{row.model}</Td>
                <Td>{row.orgUnit}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </VStack>
    </ChakraProvider>
  );
};

export default MasterReport;
