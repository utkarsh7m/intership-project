import React, { useState, useEffect } from 'react';
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
  Select,
  Textarea,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogFooter,
} from '@chakra-ui/react';
import Header from '../../Header';
import Loader from '../../Loader';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

const PDMaster = () => {
  const [id, setId] = useState(generateSerialNumber());
  const [product, setProduct] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [description, setDescription] = useState('');
  const [orgUnit, setOrgUnit] = useState('');
  const [section, setSection] = useState('');
  const [location, setLocation] = useState('');
  const [assignPerson, setAssignPerson] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleSubmit = () => {
    setIsDialogOpen(true); 
  };

  const handleConfirmSave = async () => {
    try {
      const dataToSend = {
        id,
        product,
        make,
        model,
        description,
        orgUnit,
        section,
        location,
        assignPerson,
        dueDate,
      };

      await axios.post('http://localhost:3001/api/pdMaster', dataToSend, { withCredentials: true });
      
      setIsDialogOpen(false);

      handleClear();
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  const handleCancelSave = () => {
    setIsDialogOpen(false);
  };

  const handleClear = () => {
    setId(generateSerialNumber());
    setProduct('');
    setMake('');
    setModel('');
    setDescription('');
    setOrgUnit('');
    setSection('');
    setLocation('');
    setAssignPerson('');
    setDueDate('');
  };

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 250));
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
          <VStack
            spacing={8}
            align="center"
            justify="center"
            height="100vh"
            paddingTop="30px"
          >
            <h1
              style={{ fontSize: '3rem', color: 'teal', marginBottom: '-20px' }}
            >
              Portable Detector Master
            </h1>
            <Box
              borderWidth="2px"
              p="4"
              borderRadius="lg"
              width="80%"
              maxWidth="800px"
              boxShadow="lg"
            >
              <Grid templateColumns="1fr 1fr" gap={4}>
                <GridItem>
                  <FormControl isRequired>
                    <FormLabel>Serial No.</FormLabel>
                    <Input type="text" value={id} isReadOnly />
                  </FormControl>
                </GridItem>

                <GridItem>
                  <FormControl isRequired>
                    <FormLabel>Organization Unit</FormLabel>
                    <Input
                      type="text"
                      value={orgUnit}
                      onChange={e => setOrgUnit(e.target.value)}
                    />
                  </FormControl>
                </GridItem>

                <GridItem>
                  <FormControl isRequired>
                    <FormLabel>Section</FormLabel>
                    <Select
                      placeholder="Select Section"
                      value={section}
                      onChange={e => setSection(e.target.value)}
                    >
                      <option value="Operation">Operation</option>
                      <option value="Mechanical">Mechanical</option>
                      <option value="Electrical">Electrical</option>
                    </Select>
                  </FormControl>
                </GridItem>

                <GridItem>
                  <FormControl isRequired>
                    <FormLabel>Make</FormLabel>
                    <Select
                      placeholder="Select Make"
                      value={make}
                      onChange={e => setMake(e.target.value)}
                    >
                      <option value="DRAEGER">DRAEGER</option>
                      <option value="HONEYWELL">HONEYWELL</option>
                      <option value="MSA">MSA</option>
                      <option value="WATCHGAS">WATCHGAS</option>
                    </Select>
                  </FormControl>
                </GridItem>

                <GridItem>
                  <FormControl isRequired>
                    <FormLabel>Type</FormLabel>
                    <Select
                      placeholder="Select Type"
                      value={model}
                      onChange={e => setModel(e.target.value)}
                    >
                      <option value="CO+O2">CO+O2</option>
                      <option value="CO">CO</option>
                      <option value="O2">O2</option>
                      <option value="Multi GAS">Multi GAS</option>
                    </Select>
                  </FormControl>
                </GridItem>

                <GridItem>
                  <FormControl isRequired>
                    <FormLabel>Location</FormLabel>
                    <Select
                      placeholder="Select Location"
                      value={location}
                      onChange={e => setLocation(e.target.value)}
                    >
                      <option value="Tata Steel Meramandali">
                        Tata Steel Meramandali
                      </option>
                      <option value="Tata Steel Khopoli">
                        Tata Steel Khopoli
                      </option>
                      <option value="Tata Steel Sahibabad">
                        Tata Steel Sahibabad
                      </option>
                    </Select>
                  </FormControl>
                </GridItem>

                <GridItem>
                  <FormControl isRequired>
                    <FormLabel>Assign Person</FormLabel>
                    <Input
                      type="text"
                      value={assignPerson}
                      onChange={e => setAssignPerson(e.target.value)}
                    />
                  </FormControl>
                </GridItem>

                <GridItem>
                  <FormControl isRequired>
                    <FormLabel>Due Date</FormLabel>
                    <DatePicker
                      selected={dueDate}
                      onChange={date => setDueDate(date)}
                      customInput={
                        <Input
                          style={{
                            backgroundColor: 'white',
                            width: '100%',
                            padding: '10px',
                            borderRadius: '4px',
                            border: '1px solid #ced4da',
                          }}
                        />
                      }
                    />
                  </FormControl>
                </GridItem>

                <GridItem colSpan={2}>
                  <FormControl>
                    <FormLabel>Description</FormLabel>
                    <Textarea
                      value={description}
                      onChange={e => setDescription(e.target.value)}
                    />
                  </FormControl>
                </GridItem>
              </Grid>

              {/* Confirmation Dialog */}
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
                    <Button colorScheme="teal" onClick={handleConfirmSave}>
                      OK
                    </Button>
                    <Button colorScheme="red" onClick={handleCancelSave} ml={3}>
                      Cancel
                    </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              {/* <VStack spacing={4} justify="center"> */}
              <Button
                mt="4"
                colorScheme="teal"
                onClick={handleSubmit}
                width="110px"
                height="40px"
                position="relative"
                left="80%"
                transform="translateX(-50%)"
                isDisabled={!id || !orgUnit || !section || !make || !model || !location || !assignPerson || !dueDate}

              >
                Save
              </Button>

              <Button
                mt="4"
                colorScheme="red"
                onClick={handleClear}
                width="110px"
                height="40px"
                position="relative"
                left="10%"
                transform="translateX(-50%)"
              >
                Clear
              </Button>
              {/* </VStack> */}
            </Box>
          </VStack>
        </>
      )}
    </ChakraProvider>
  );
};

export default PDMaster;

function generateSerialNumber() {
  return 'SN' + Math.floor(Math.random() * 1000000);
}