import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Heading,
  VStack,
  HStack,
  Input,
  Select,
  Button,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import Header from '../Header';
import { useNavigate } from 'react-router-dom';

const ReceivedCalibrationDetector = () => {
  const [formData, setFormData] = useState({
    orgUnitFrom: '',
    orgUnitTo: '',
    makeFrom: '',
    makeTo: '',
    serialNumberFrom: '',
    serialNumberTo: '',
    assignPersonFrom: '',
    assignPersonTo: '',
    dueDateFrom: '',
    dueDateTo: '',
    recDateFrom: '',
    recDateTo: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleClear = () => {
    setFormData({
      orgUnitFrom: '',
      orgUnitTo: '',
      makeFrom: '',
      makeTo: '',
      serialNumberFrom: '',
      serialNumberTo: '',
      assignPersonFrom: '',
      assignPersonTo: '',
      dueDateFrom: '',
      dueDateTo: '',
      recDateFrom: '',
      recDateTo: '',
    });
  };

  const handleExecute = () => {
    // Navigate to the new page and pass the form data as state
    navigate('/execute-detector', { state: { formData } });
  };
  return (
    <ChakraProvider>
      <Header />
      <Box p={8} width="100%" paddingTop="65px" maxWidth="580px" margin="auto">
        <Heading mb={4} textAlign="center" color="teal">
          Received Calibration Detector
        </Heading>

        {/* Input Parameters */}
        <Box borderWidth="1px" borderRadius="lg" p={4} mb={4}>
          <Heading fontSize="lg" mb={2} color="teal">
            Input Parameters
          </Heading>

          <VStack spacing={4}>
            {/* Org. Unit */}
            <FormControl display="flex" alignItems="center" justifyContent="center">
              <FormLabel>Org. Unit</FormLabel>
              <HStack marginLeft="85px">
                <Input
                  placeholder="Enter"
                  value={formData.orgUnitFrom}
                  onChange={(e) => handleInputChange('orgUnitFrom', e.target.value)}
                />
              </HStack>
            </FormControl>

            {/* Make of Detector */}
            <FormControl display="flex" alignItems="center" justifyContent="center">
              <FormLabel>Make of Detector</FormLabel>
              <HStack marginLeft="25px">
                <Input
                  placeholder="Enter"
                  value={formData.makeFrom}
                  onChange={(e) => handleInputChange('makeFrom', e.target.value)}
                />
              </HStack>
            </FormControl>

            {/* Serial Number */}
            <FormControl display="flex" alignItems="center" justifyContent="center">
              <FormLabel>Serial Number</FormLabel>
              <HStack marginLeft="47px">
                <Input
                  placeholder="Enter"
                  value={formData.serialNumberFrom}
                  onChange={(e) => handleInputChange('serialNumberFrom', e.target.value)}
                />
              </HStack>
            </FormControl>

            {/* Assign Person */}
            <FormControl display="flex" alignItems="center" justifyContent="center">
              <FormLabel>Assign Person</FormLabel>
              <HStack marginLeft="50px">
                <Input
                  placeholder="Enter"
                  value={formData.assignPersonFrom}
                  onChange={(e) => handleInputChange('assignPersonFrom', e.target.value)}
                />
              </HStack>
            </FormControl>
          </VStack>
        </Box>

        {/* Entry Options */}
        <Box borderWidth="1px" borderRadius="lg" p={4} mb={4}>
          <Heading fontSize="lg" mb={2} color="teal">
            Entry Options
          </Heading>

          <VStack spacing={4}>
            {/* Due Date */}
            <FormControl display="flex" alignItems="center" justifyContent="center">
              <FormLabel>Due Date</FormLabel>
              <HStack marginLeft="65px">
                <Input
                  type="date"
                  placeholder="Enter Due Date From"
                  value={formData.dueDateFrom}
                  onChange={(e) => handleInputChange('dueDateFrom', e.target.value)}
                />
              </HStack>
            </FormControl>

            {/* Rec. Date */}
            <FormControl display="flex" alignItems="center" justifyContent="center">
              <FormLabel>Rec. Date</FormLabel>
              <HStack marginLeft="65px">
                <Input
                  type="date"
                  placeholder="Enter Rec. Date From"
                  value={formData.recDateFrom}
                  onChange={(e) => handleInputChange('recDateFrom', e.target.value)}
                />
              </HStack>
            </FormControl>
          </VStack>
        </Box>

        {/* Submit and Clear Buttons */}
        <HStack spacing={4} justify="center">
          <Button colorScheme="gray" size="lg" onClick={handleClear}>
            Clear
          </Button>
          <Button colorScheme="teal" size="lg" onClick={handleExecute}>
            Execute
          </Button>
        </HStack>
      </Box>
    </ChakraProvider>
  );
};

export default ReceivedCalibrationDetector;
