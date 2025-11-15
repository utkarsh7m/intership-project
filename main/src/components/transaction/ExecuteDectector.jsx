import React, { useEffect, useState } from 'react';
import {
  ChakraProvider,
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Checkbox,
  Button,
  Editable,
  EditableInput,
  EditablePreview,
  useColorMode,
  Input,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogFooter,
} from '@chakra-ui/react';
import Header from '../Header';
import axios from 'axios';
import { addMonths, format } from 'date-fns';

const ExecuteDetector = () => {
  const { colorMode } = useColorMode();
  const [masterData, setMasterData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedDetectors, setSelectedDetectors] = useState([]);
  const [editedValues, setEditedValues] = useState({});
  const [nextDates, setNextDates] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const [assignPerson, setAssignPerson] = useState('');

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const handleSubmit = () => {
    setIsDialogOpen(true);
  };
  const handleCancelSave = () => {
    setIsDialogOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/pdmReport');
        const data = response.data.map(row => {
          const nextDate = addMonths(new Date(row.dueDate), 6);
          return { ...row, nextDate };
        });
        setMasterData(data);
        setNextDates(data.map(row => row.nextDate));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Filter data based on search term
    const filtered = masterData.filter(row =>
      Object.values(row).some(value =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredData(filtered);
  }, [searchTerm, masterData]);

  const handleMarkAll = () => {
    let updatedData;
    if (searchTerm) {
      updatedData = filteredData.map(item => ({ ...item, mark: true }));
    } else {
      updatedData = masterData.map(item => ({ ...item, mark: true }));
    }
    setMasterData(updatedData);
  };

  const handleUnmarkAll = () => {
    const updatedData = masterData.map(item => ({ ...item, mark: false }));
    setMasterData(updatedData);
  };

  const handleReceivedDetector = async () => {
    try {
      // Filter selected detectors based on mark
      const selectedRows = masterData.filter(item => item.mark);

      // Extract only required fields (REC DATE, REC TIME)
      const selectedData = selectedRows.map(row => {
        const {
          id,
          recDate,
          dueDate,
          person,
          section,
          make,
          model,
          orgUnit,
        } = row;

        // Format recDate as a string before sending it to the backend
        const formattedRecDate =
          recDate instanceof Date ? recDate.toISOString() : recDate;

        // Use the edited values if available, otherwise use the original values
        const recDateValue =
          editedValues[row.id] !== undefined
            ? editedValues[row.id]
            : formattedRecDate instanceof Date
            ? formattedRecDate.toISOString()
            : null; // Or handle the case when formattedRecDate is not a valid date

        return {
          id,
          recDate: recDateValue,
          dueDate,
          person: assignPerson,
          section,
          make,
          model,
          orgUnit,
        };
      });

      // Implement logic for handling selected detectors (e.g., send to backend)
      await axios.post('http://localhost:3001/api/rdMaster', selectedData);
      setIsDialogOpen(false);
      // Clear selected detectors and edited values after processing
      setSelectedDetectors([]);
      setEditedValues({});
    } catch (error) {
      console.error('Error saving received detectors:', error);
    }
  };

  return (
    <ChakraProvider>
      <Header />
      <Box p={8} width="100%" margin="auto">
        <Heading mb={4} marginTop="65px" textAlign="center" color="teal">
          Execute Detector
        </Heading>

        <Box mr={4} textAlign="right">
          <Input
            placeholder="Search..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            mr={2}
            width="270px"
          />
          <Button colorScheme="teal" mr={2} onClick={handleMarkAll}>
            Mark All
          </Button>
          <Button colorScheme="gray" onClick={handleUnmarkAll}>
            Unmark All
          </Button>
        </Box>

        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>MARK</Th>
              <Th>SERIAL NO.</Th>
              <Th>REC DATE</Th>
              <Th>REC PERSON</Th>
              <Th>CAL DATE</Th>
              <Th color={"red"}>NEXT DATE</Th>
              <Th>SECTION</Th>
              <Th>MAKE</Th>
              <Th>TYPE</Th>
              <Th>ORG UNIT</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredData.map((row,index) => (
              <Tr key={row.id}>
                <Td>
                  <Checkbox
                    bgColor={'white'}
                    borderRadius={4}
                    isChecked={row.mark}
                    onChange={() => {
                      const updatedData = masterData.map(det =>
                        det.id === row.id ? { ...det, mark: !det.mark } : det
                      );
                      setMasterData(updatedData);
                    }}
                  />
                </Td>
                <Td>{row.id}</Td>
                <Td>
                  <Input
                    borderRadius={6}
                    bgColor={colorMode === 'light' ? 'white' : '#333a4d'}
                    value={row.recDate}
                    width="120px"
                    onChange={e =>
                      setEditedValues({
                        ...editedValues,
                        [row.id]: e.target.value,
                      })
                    }
                  />
                </Td>
                <Td>
                  <Input
                    borderRadius={6}
                    bgColor={colorMode === 'light' ? 'white' : '#333a4d'}
                    value={row.person} // Update this line
                    width="120px"
                    onChange={e => setAssignPerson(e.target.value)}
                  />
                </Td>
                <Td>
                  {row.dueDate
                    ? format(new Date(row.dueDate), 'dd-MM-yyyy')
                    : 'N/A'}
                </Td>
                <Td>
                  {row.dueDate
                    ? format(new Date(nextDates[index]), 'dd-MM-yyyy')
                    : 'N/A'}
                </Td>
                <Td>{row.section}</Td>
                <Td>{row.make}</Td>
                <Td>{row.model}</Td>
                <Td>{row.orgUnit}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>


        <AlertDialog
                isOpen={isDialogOpen}
                onClose={handleCancelSave}
                isCentered
              >
                <AlertDialogOverlay />
                <AlertDialogContent>
                  <AlertDialogHeader>Confirm Save</AlertDialogHeader>
                  <AlertDialogCloseButton />
                  <AlertDialogBody>
                    Are you sure you want to save it?
                  </AlertDialogBody>
                  <AlertDialogFooter>
                    <Button colorScheme="teal" onClick={handleReceivedDetector}>
                      OK
                    </Button>
                    <Button colorScheme="red" onClick={handleCancelSave} ml={3}>
                      Cancel
                    </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>


        <Box textAlign="center" mt={4}>
          <Button colorScheme="teal" size="lg" onClick={handleSubmit}>
            RECEIVED DETECTOR
          </Button>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default ExecuteDetector;
