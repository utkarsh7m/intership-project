import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Heading,
  VStack,
  Input,
  Select,
  Button,
  FormControl,
  FormLabel,
  HStack,
} from '@chakra-ui/react';
import Header from '../../Header';

const LocationCreate = () => {
  const industries = ['Manufacturing', 'IT', 'Healthcare', 'Education', 'Retail'];
  const countryCodes = ['+1', '+91', '+44', '+81', '+86']; // Add your desired country codes

  const [locationDetails, setLocationDetails] = useState({
    locationName: '',
    locationCode: '',
    industry: '',
    address: '',
    contactPerson: '',
    countryCode: '',
    contactNumber: '',
  });

  const handleChange = (field, value) => {
    setLocationDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  const handleClear = () => {
    setLocationDetails({
      locationName: '',
      locationCode: '',
      industry: '',
      address: '',
      contactPerson: '',
      countryCode: '',
      contactNumber: '',
    });
  };

  const handleSubmit = () => {
    // Implement your submission logic here
    console.log('Submitting:', locationDetails);
  };

  return (
    <ChakraProvider>
      <Header />
      <Box p={8} width="100%" maxWidth="800px" margin="auto" paddingTop="53px">
        <Heading mb={4} textAlign="center" color="teal">
          Location Master
        </Heading>

        <Box borderWidth="1px" borderRadius="lg" p={4} mb={4}>
          <Heading fontSize="lg" mb={2}>
            Location Details
          </Heading>

          <VStack spacing={4}>
            {/* Location Name */}
            <FormControl>
              <FormLabel>Location Name</FormLabel>
              <Input
                placeholder="Enter location name"
                value={locationDetails.locationName}
                onChange={(e) => handleChange('locationName', e.target.value)}
              />
            </FormControl>

            {/* Location Code */}
            <FormControl>
              <FormLabel>Location Code</FormLabel>
              <Input
                placeholder="Enter location code"
                value={locationDetails.locationCode}
                onChange={(e) => handleChange('locationCode', e.target.value)}
              />
            </FormControl>

            {/* Industry and Contact Number in the same line */}
            <HStack spacing="60px">
              {/* Industry */}
              <FormControl>
                <FormLabel>Industry</FormLabel>
                <Select
                width="260px"
                  placeholder="Select industry"
                  value={locationDetails.industry}
                  onChange={(e) => handleChange('industry', e.target.value)}
                >
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
                  ))}
                </Select>
              </FormControl>

              {/* Contact Number with Country Code */}
              <FormControl>
                <FormLabel>Contact Number</FormLabel>
                <HStack>
                  <Select
                  width="75px"
                    placeholder=""
                    value={locationDetails.countryCode}
                    onChange={(e) => handleChange('countryCode', e.target.value)}
                  >
                    {countryCodes.map((code) => (
                      <option key={code} value={code}>
                        {code}
                      </option>
                    ))}
                  </Select>
                  <Input
                    type="tel"
                    marginLeft="16px"
                    width="250px"
                    placeholder="Enter contact number"
                    value={locationDetails.contactNumber}
                    onChange={(e) => handleChange('contactNumber', e.target.value)}
                  />
                </HStack>
              </FormControl>
            </HStack>

            {/* Address */}
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input
                placeholder="Enter address"
                value={locationDetails.address}
                onChange={(e) => handleChange('address', e.target.value)}
              />
            </FormControl>

            {/* Contact Person */}
            <FormControl>
              <FormLabel>Contact Person</FormLabel>
              <Input
                placeholder="Enter contact person"
                value={locationDetails.contactPerson}
                onChange={(e) => handleChange('contactPerson', e.target.value)}
              />
            </FormControl>
          </VStack>
        </Box>

        {/* Submit and Clear Buttons */}
        <HStack spacing={4} justify="flex-end">
          <Button colorScheme="gray" size="lg" onClick={handleClear}>
            Clear
          </Button>
          <Button colorScheme="teal" size="lg" onClick={handleSubmit}>
            Submit
          </Button>
        </HStack>
      </Box>
    </ChakraProvider>
  );
};

export default LocationCreate;
